import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../Components/Weather/chart';
import GoogleMap from '../../Components/Weather/google-map';


class WeatherList extends Component {
    renderWeatherData(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord;
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temps} unit="K" color="red" />
                </td>
                <td>
                    <Chart data={pressure} unit="hPa" color="orange" />
                </td>
                <td>
                    <Chart data={humidity} unit="%" color="blue" />
                </td>
            </tr>

        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherData)}
                </tbody>

            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList)
