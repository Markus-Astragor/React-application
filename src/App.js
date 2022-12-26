import React from "react";
import './App.css';
import Input from "./Components/weather/Input";
import Print from "./Components/weather/Print";

const Api_key = "6375eabc4e2fd1bf43e78cdf5c2c79b8";


class App extends React.Component{
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    if(city){
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`);
    const data = await api_url.json();

    let sunset = data.sys.sunset;
    let date_sunset = new Date();
    date_sunset.setTime(sunset);
    let sunset_date = date_sunset.getHours() + ':' + date_sunset.getMinutes() + ':' + date_sunset.getSeconds();

    let sunrise = data.sys.sunrise;
    let date_sunrise = new Date();
    date_sunrise.setTime(sunrise);
    let sunrise_date = date_sunrise.getHours() + ':' + date_sunrise.getMinutes() + ':' + date_sunrise.getSeconds();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: sunrise_date,
      sunset: sunset_date,
      error: "Not right town"
    })
  }
  }
    render(){
      return(
        <div className="App">
          <p>Here you can type in your town name</p>
          <Input getWeather_Method={this.getWeather}/>
          <Print 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
          />
        </div>
      )
    }
}

export default App;