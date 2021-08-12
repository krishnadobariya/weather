const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_val = document.getElementById("temp_real_val");
const datahide = document.querySelector('.middle-layer')
const curday = document.getElementById("day");
const curdate = document.getElementById("today_date")
const getinfo = async(event) => {
    event.preventDefault();
    let cityval = cityname.value;

  

   if(cityval == ""){
    city_name.innerText = `plz write the name before search`;
    datahide.classList.add('data_hide');
   }else
   {try{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2c9fd5ddbbfe531fdb27c57f65adb7bc`
    const response = await fetch(url);
    const data = await response.json();
    const arr = [data];
    city_name.innerText = `${arr[0].name} ${arr[0].sys.country}`;
    temp_real_val.innerText = arr[0].main.temp;
   
    const tempstatus =  arr[0].weather[0].main;
    if (tempstatus == "Sunny")
        {
            temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'>"
        }else if (tempstatus == "Clouds")
        {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'>"
        }else if (tempstatus == "Rain")
        {
            temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'>"
        }else
        {
            temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #44c3de;'>"
        }
        datahide.classList.remove('data_hide');
}catch{
    city_name.innerText = `plz enter the city name proparly`;
    datahide.classList.add('data_hide');  
   }
   }

}
submitbtn.addEventListener('click' , getinfo);

const getcurrentday = () =>{
    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thrusday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    let currentTime = new Date();
    let day = (weekday[currentTime.getDay()]);
    return day;
};
curday.innerHTML = getcurrentday();

const getcurrenttime = () => {
    var month = [
        "jan",
        "feb",
        "march",
        "apr",
        "may",
        "jun",
        "july",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec",
     ];
 var now = new Date();
 var month = month[now.getMonth() + 1];
 var date = now.getDate();
 var year = now.getFullYear();

 return `${month} ${date}, ${year}`;
};
curdate.innerHTML = getcurrenttime();