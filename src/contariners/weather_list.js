import React, {Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';



class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name
    const temp = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const coords = {
          lat: cityData.city.coord.lat,
          lon: cityData.city.coord.lon 
        }

    return (
      <tr key={ name }>
        <td><GoogleMap coords={ coords } /></td>
        <td><Chart data={ temp } color="orange" units="C°"/></td>
        <td><Chart data={ pressures } color="blue" units="hPa" /></td>
        <td><Chart data={ humidities } color="black" units="%" /></td>
      </tr>
    );
  }


  render(){
    return (
      <table className="table table-hover"> 
        <thead>
         <tr>
           <th>City</th>
           <th>Temp. (C°)</th>
           <th>Pressure (hPa)</th>
           <th>Humidity (%)</th>
         </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
} 

function mapStateToPropes({ weather }) {
  return { weather }
}

export default connect(mapStateToPropes)(WeatherList)