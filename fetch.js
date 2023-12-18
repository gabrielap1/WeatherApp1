fetch(".data/weather.json")
  .then((response) => {
    // make a JSON formatted response
    // from the actual response content

    return response.json();
  })

  .then((formattedResponse) => {
    // directly accesing the weather propriety
    // from the response
    return displayWeatherCards(formattedResponse.weather);
  });

function displayWeatherCards(data) {

    return data.forEach((item) => {
const cardHTML =
      <div class="weather-card">
        <h3>${data.city}</h3>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Condition: ${data.condition}</p>
        <p>Humidity: ${data.details.humidity}%</p>
        <p>Wind Speed: ${data.details.windSpeed}km/h</p>
      </div>
      ;

   document.body.innerHTML += cardHTML;
    ));
}
