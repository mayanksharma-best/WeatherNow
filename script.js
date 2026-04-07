let apiKey = "7fb320e231c31859da13dc736e54096f";

let button = document.getElementById("search-btn");
let showData = document.getElementById("weather-data");


button.addEventListener("click" , async ()=>{
    let cityName = document.getElementById("city-name").value.trim();

    // When city name not given
    if(cityName === ""){
        showData.innerHTML = `<h3 style = "color: rgb(228, 37, 40); text-align: center"> Enter a Valid City Name. </h3>`
        return
    }

    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);

        // when ok key give false it means city not found
        if(!res.ok){
            `<h3 style = "color: rgb(228, 37, 40); text-align: center"> City NAme not found </h3>`;
            return;
        }

        // Convert json into promise readeable format
        let data = await res.json();
        console.log(data);

        showData.innerHTML = `
        <h2>${data.name} , ${data.sys.country}</h2>
        <h3>Temperature: ${data.main.temp}  </h3>
        <p><b>Wind Speed: </b> ${data.wind.speed} m/s</p>
        <p><b>Pressure: </b> ${data.main.humidity} g/m<sup>3</sup></p>
        `
        }

    // When error in api  fetch
    catch (error){
        console.log(error,"Error in Fetching Api");
        
    }



})
