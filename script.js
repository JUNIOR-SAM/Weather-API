document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        signUp();
    }
})



const toast = (message, bgColor, color, fontWeight, marginTop, borderRadius) => {
    Toastify({
        text: message,
        duration: 2000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: bgColor,
            color,
            fontWeight,
            marginTop,
            borderRadius,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// setTimeout(() => {
//     console.log(lati, longi);
//     console.log(url);
//     endpoint = url;
// }, 2000);

const apiKey = "491d866c9ea0fbdb86147016d5a83c28";

const getWeather = () => {
    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();
    const show = document.getElementById("show"); // Make sure you have this line
    // navigator.geolocation.getCurrentPosition((position) => {
    // })
    // lat = position.coords.latitude;
    // long = position.coords.longitude;
    // const lati = lat;
    // const longi = long;

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    if (city === "") {
        toast('Please fill all the fields', 'red', 'white', 'bold', '50px', '50px');
        return; 
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            show.innerHTML = `<div class="bg-white  rounded-4 shadow-lg col-8 col-md-6 col-lg-2 text-center m-auto mt-4 py-3">
                                <p class=""><b class="text-black fw-light"> City</b> -- <b class="text-primary">${data.name.toUpperCase()}</b></p>
                                <p class="pt-0"><b class="text-black fw-light"> Temperature</b> -- <b class="text-primary">${data.main.temp}°C</b><p/>
                                <p class="pt-0"><b class="text-black fw-light"> Humidity</b> -- <b class="text-primary">${data.main.humidity}%</b><p/>
                                <p class="pt-0"><b class="text-black fw-light"> Pressure</b> -- <b class="text-primary">${data.main.pressure} hPa</b><p/>
                                <p class="pt-0"><b class="text-black fw-light"> Latitude</b> -- <b class="text-primary">${data.coord.lat} φ</b></p>
                                <p class="pt-0"><b class="text-black fw-light"> Longitude</b> -- <b class="text-primary">${data.coord.lon} °</b></p>
                                <p class="pt-0"><b class="text-black fw-light"> Speed</b> -- <b class="text-primary">${data.wind.speed}m/s</b></p>
                                <p class="pt-0"><b class="text-black fw-light"> Country</b> -- <b class="text-primary">${data.sys.country}</b></p>
                                <p class="pt-0"><b class="text-black fw-light"> Description</b> -- <b class="text-primary">${data.weather[0].description}</b></p>
                                </div>`;
            cityInput.value = "";
            toast('Weather data fetched successfully', 'green', 'white', 'bold',  '30px', '50px');
        })
    // .catch((error) => {
    //     console.error("Error fetching weather data:", error);
    // });
};