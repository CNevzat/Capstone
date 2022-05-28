async function getCoordinates()
{
    var city = document.getElementById("city").value;
    const api_url = 'https://api.opencagedata.com/geocode/v1/json?q='+city+'&key=54c402a5300d4371b1b15f0128864a4f&language=tr&pretty=1';
    const response = await fetch(api_url);
    const data2 = await response.json();
    const {results} = data2;
    const object_values=Object.values(results);             
    var coordinates= object_values[0]; 
    const {geometry}= coordinates;
    const {lat,lng}= coordinates.geometry;
    var latitude_output = lat;
    var longtitude_output = lng;
    document.getElementById('latitude_output').textContent = latitude_output;
    document.getElementById('longtitude_output').textContent = longtitude_output; 
    //alert("Latitude: "+latitude_output+"\nLongtitude: "+longtitude_output);
    document.getElementById("longtitude_output").style.display = 'none';
    document.getElementById("latitude_output").style.display = 'none';
    document.getElementById("latitude").value = latitude_output;
    document.getElementById("longtitude").value = longtitude_output;
} 
function clean_latitude(){
  document.getElementById("latitude").value = ""
}  
function clean_longtitude(){
  document.getElementById("longtitude").value = ""
}  

var array_ALLSKY_SFC_SW_DWN=[]; 
var array_CLRSKY_SFC_SW_DWN =[];
var array_ALLSKY_KT =[]; 
var global_Arr_0=[];  
var global_Arr_1 =[];
var global_Arr_2 =[]; 

var array_result = [];  

async function getData_ALLSKY_KT()  //All Sky Insolation Clearness Index
{
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;

    const api_url_1st_parameter = 'https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_KT&format=json&header=true';
    const response = await fetch(api_url_1st_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_KT}= properties.parameter;
    array_ALLSKY_KT =Object.values(ALLSKY_KT);  
    for (var i = 0; i < 12; i++) 
    global_Arr_0.push((array_ALLSKY_KT[i]));                         
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_KT[0],array_ALLSKY_KT[1],array_ALLSKY_KT[2],array_ALLSKY_KT[3],array_ALLSKY_KT[4],array_ALLSKY_KT[5],array_ALLSKY_KT[6],array_ALLSKY_KT[7],array_ALLSKY_KT[8],array_ALLSKY_KT[9],array_ALLSKY_KT[10],array_ALLSKY_KT[11]];
    var barColors = ["red", "skyblue","brown","orange","purple","lime","goldenrod","aqua","beige","cadetblue","green","blue"];   
        new Chart("All Sky Insolation Clearness Index:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Insolation Clearness Index:"
            }
          }
        });       
} 
async function getData_CLRSKY_SFC_SW_DWN() //Clear Sky Surface Shortwave Downward Irradiance
{
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_2nd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=CLRSKY_SFC_SW_DWN&format=json&header=true'; 
    const response = await fetch(api_url_2nd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{CLRSKY_SFC_SW_DWN}= properties.parameter;
    array_CLRSKY_SFC_SW_DWN=Object.values(CLRSKY_SFC_SW_DWN); 
    for (var i = 0; i < 12; i++) 
    global_Arr_1.push(array_CLRSKY_SFC_SW_DWN[i]);   
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_CLRSKY_SFC_SW_DWN[0],array_CLRSKY_SFC_SW_DWN[1],array_CLRSKY_SFC_SW_DWN[2],array_CLRSKY_SFC_SW_DWN[3],array_CLRSKY_SFC_SW_DWN[4],array_CLRSKY_SFC_SW_DWN[5],array_CLRSKY_SFC_SW_DWN[6],array_CLRSKY_SFC_SW_DWN[7],array_CLRSKY_SFC_SW_DWN[8],array_CLRSKY_SFC_SW_DWN[9],array_CLRSKY_SFC_SW_DWN[10],array_CLRSKY_SFC_SW_DWN[11]];
    var barColors = ["indigo", "green","bisque","orange","brown","lime","purple","darkred","beige","mediumpurple","deeppink","darksalmon"];
        new Chart("Clear Sky Surface Shortwave Downward Irradiance:", {
          width:600,
          height:600,
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Clear Sky Surface Shortwave Downward Irradiance:"
            }
          }
        });           
} 
async function getData_ALLSKY_SFC_SW_DWN() //All Sky Surface Shortwave Downward Irradiance
{
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longtitude").value; 
    var starting_date = document.getElementById("starting_date").value;
    var ending_date = document.getElementById("ending_date").value;
    const api_url_3rd_parameter ='https://power.larc.nasa.gov/api/temporal/monthly/point?start='+starting_date+'&end='+ending_date+'&latitude='+latitude+'&longitude='+longitude+'&community=re&parameters=ALLSKY_SFC_SW_DWN&format=json&header=true'; 
    const response = await fetch(api_url_3rd_parameter);
    const data = await response.json(); 
    const{properties}= data;
    const{parameter}= data.properties;
    const{ALLSKY_SFC_SW_DWN}= properties.parameter;
    array_ALLSKY_SFC_SW_DWN=Object.values(ALLSKY_SFC_SW_DWN); 
   
    for (var i = 0; i < 12; i++) 
    global_Arr_2.push(array_ALLSKY_SFC_SW_DWN[i]);
    var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];  
    var yValues = [array_ALLSKY_SFC_SW_DWN[0],array_ALLSKY_SFC_SW_DWN[1],array_ALLSKY_SFC_SW_DWN[2],array_ALLSKY_SFC_SW_DWN[3],array_ALLSKY_SFC_SW_DWN[4],array_ALLSKY_SFC_SW_DWN[5],array_ALLSKY_SFC_SW_DWN[6],array_ALLSKY_SFC_SW_DWN[7],array_ALLSKY_SFC_SW_DWN[8],array_ALLSKY_SFC_SW_DWN[9],array_ALLSKY_SFC_SW_DWN[10],array_ALLSKY_SFC_SW_DWN[11]];
    var barColors = ["lime", "blue","green","sienna","goldenrod","red","cadetblue","aqua","beige","purple","yellow"];
        
        new Chart("All Sky Surface Shortwave Downward Irradiance:", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "All Sky Surface Shortwave Downward Irradiance:"
            }
          }
        });          
}  
function calculate()
{
    for(var i=0;i<12;i++){
        var c_output1 = (global_Arr_0[i] * global_Arr_1[i]);
        var c_output2=  (global_Arr_2[i] * (1-(global_Arr_0[i])));
        var c_output3 = c_output1 + c_output2;
        array_result.push(c_output3);    
        var xValues = ["January", "February", "March", "April", "May","June","July","August","October","November","December",];
        var yValues = [array_result[0],array_result[1],array_result[2],array_result[3],array_result[4],array_result[5],array_result[6],array_result[7],array_result[8],array_result[9],array_result[10],array_result[11]];
        var barColors = ["red", "green","blue","orange","brown","lime","purple","aqua","beige","cadetblue","brown","yellow"];
        
        new Chart("results", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "RESULTS"
            }
          }
        });
}  
}







