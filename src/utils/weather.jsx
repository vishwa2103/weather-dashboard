export async function weather(city) {
  const apikey = "115cfed683aaf1d8107837ea859ac212"
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
  );
  
  return await response.json()
}
