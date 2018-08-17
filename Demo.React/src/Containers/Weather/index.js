import React, { Component } from 'react'

import WeatherSearchBar from './weather-search-bar'
import WeatherList from './weather-list';

class WeatherService extends Component {
    render() {
        return (
            <div>
                <WeatherSearchBar />
                <WeatherList />
            </div>
        );
    }

}

export default WeatherService;