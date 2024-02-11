let input_box = document.querySelector("#input-box");
let btn = document.querySelector("#btn");
let weather_box = document.querySelector(".weather-box");

btn.addEventListener("click", (event) => {
  if (input_box.value) {
    event.preventDefault();
    weather_box.classList.add("show");
  }

  let inputdata = input_box.value;
  const key = "97c4172136a167aba312bf6966d97bb5";
  const ulr = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function weatherdata() {       
    let response = await fetch(ulr + inputdata + `&appid=${key}`);
    let data = await response.json();
    console.log(data) 

    let dt = data.dt;

    // Convert Unix timestamp to milliseconds by multiplying with 1000
    let dtMilliseconds = dt * 1000;

    // Create a new Date object using the milliseconds
    let dtObj = new Date(dtMilliseconds);

    // Format the date as a string
    let formattedDate = dtObj.toLocaleString();

    document.querySelector("#city").innerHTML = `${data.name}, ${data.sys.country}`;
    document.querySelector("#date").innerHTML = `${formattedDate}`;
    document.querySelector("#temp").innerHTML = `${data.main.temp} °C`;
    document.querySelector("#min-max").innerHTML = `${data.main.temp_min}&deg; C(min) / ${data.main.temp_max}&deg; C(max)`;
    document.querySelector("#speed-humidity").innerHTML = `Speed :${data.wind.speed}  Humidity :${data.main.humidity}`;
    document.querySelector("#weather").innerHTML = `${data.weather[0].main}`;
  }
  weatherdata(); 
});

