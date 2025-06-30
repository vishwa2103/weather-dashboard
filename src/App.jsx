import { useState } from "react";
import "./App.css";
import { weather } from "./utils/weather";

function App() {
  const [city, setcity] = useState("");
  const [weatherinfo, setweatherinfo] = useState(null);
  const handlesearch = async () => {
    const data = await weather(city);
    setweatherinfo(data);
  };

  return (
    <div className="main" style={{
        minHeight: "100vh",
        padding: "20px",
        transition: "0.4s all ease-in-out",
      }}>
      <h1> Weather Dashboard</h1>
      <input
        value={city}
        type="text"
        onChange={(e) => setcity(e.target.value)}
        name="city"
        placeholder="Enter name of the city"
      />
      <button onClick={handlesearch}>Get weather</button>
      {weatherinfo && (
        <div className="info">
          <h2 className="text-2xl">{weatherinfo.name}</h2>
          <p>🌡️ {weatherinfo.main.temp}°C</p>
          <p>💧 Humidity: {weatherinfo.main.humidity}%</p>
          <p>🌬️ Wind: {weatherinfo.wind.speed} m/s</p>
          <p>☁️ Condition: {weatherinfo.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
