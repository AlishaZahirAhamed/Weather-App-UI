const apiKey = "125b268a216e3c425b01b8d9e39571f3";

function getWeather() {
    const city = document.getElementById("city").value.trim();
    const weatherDiv = document.getElementById("weather");

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    weatherDiv.innerHTML = "⏳ Loading...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const icon = data.weather[0].icon;

            weatherDiv.innerHTML = `
                <h2>${data.name}</h2>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                <p>🌡️ ${data.main.temp} °C</p>
                <p>${data.weather[0].description}</p>
                <p>💧 ${data.main.humidity}% | 🌬️ ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            weatherDiv.innerHTML = `<p style="color:#ffdddd;">❌ ${error.message}</p>`;
        });
}
