let input_box = document.querySelector("#input-box")               
let city = document.querySelector("#city");
let date = document.querySelector("#date");
let temp = document.querySelector("#temp");
let min_max = document.querySelector("#min-max");
let weather = document.querySelector("#weather");
let precip_humidity = document.querySelector("#precip-humidity");
let wind = document.querySelector("#wind");
let btn = document.querySelector("#btn");
let weather_box = document.querySelector(".weather-box");

btn.addEventListener("click", event=> {               

  if (input_box.value) {   
    event.preventDefault();
    weather_box.classList.add("show");     
  }

  let inputdata = input_box.value;     

  async function weatherdata() {
    let weather = fetch(`http://api.weatherstack.com/current?access_key=7be008b27906ed140672c7ced79634dc&query=${inputdata}`);

    let response = await weather;
    let data = response.json();

    return data;
  }

  let allweatherdata = weatherdata();

  allweatherdata.then(function (resolve) {
    console.log(resolve);

    let mycity = `${resolve.request.query}`;
    let mydate = `${resolve.location.localtime}`;
    let mytemp = `${resolve.current.temperature} °C`;
    let my_min_max = `${resolve.current.temperature}&deg; C(min) / ${resolve.current.temperature}&deg; C(max)`;
    let my_precip_humidity = `Precip :${resolve.current.precip}  Humidity :${resolve.current.humidity}`;
    let my_wind = `Wind :${resolve.current.wind_speed}`;
    let weather_status = `${resolve.current.weather_descriptions[0]}`;

    city.innerHTML = mycity;
    date.innerHTML = mydate;
    temp.innerHTML = mytemp;
    min_max.innerHTML = my_min_max;
    precip_humidity.innerHTML = my_precip_humidity;
    wind.innerHTML = my_wind;
    weather.innerHTML = weather_status;
  });                
 
});


