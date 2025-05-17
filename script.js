const apiKay = "5e79119ec16a3bf2f573d84d8c0a9906";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const inputCity = document.querySelector('.input-city')
const inputIcon = document.querySelector('.icon')

async function cheekWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKay}`)
    var data = await res.json();


    console.log(data);

    document.querySelector(".own-area").innerHTML = data.name;
    document.querySelector(".own-c").innerHTML = Math.round(data.main.temp) + "°C";
    // document.querySelector(".Clouds").innerHTML =data.clouds;
}

inputIcon.addEventListener('click', () => {
    cheekWeather(inputCity.value)
})

// cheekWeather()
// const inputCity = document.querySelector('.input-city')
// const inputIcon = document.querySelector('.icon')

// inputIcon.addEventListener('click', () => {
//     console.log(inputCity.value)
// })