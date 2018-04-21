import React, {Component } from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name
    const temp = cityData.list.map(weather => weather.main.temp);

    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td>
        <Sparklines height={100} width={150} data={temp} >
          <SparklinesLine color="blue" />
        </Sparklines>
        </td>
      </tr>
    );
  }
  render(){
    return (
      <table className="table table-hover"> 
        <thead>
         <tr>
           <th>City</th>
           <th>Temp.</th>
           <th>Pressure</th>
           <th>Humidity</th>
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