async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  result.innerText = "Loading...";

  try {
    const response = await fetch("84f0a5f4b8ed469b879115205260105");
    const data = await response.json();

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.main.temp}°C</p>
      <p>${data.weather[0].description}</p>
    `;
  } catch {
    result.innerText = "Error fetching data";
  }
}
