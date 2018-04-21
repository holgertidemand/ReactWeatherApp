import React, { Component } from 'react';

import WeatherList from '../contariners/weather_list';
import SearchBar from '../contariners/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
       <SearchBar />
       <WeatherList />
      </div>
    );
  }
}
