import React,{Component} from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../Components/Weather/chart';
import GoogleMap from '../../Components/Weather/google-map';

import {connect} from 'react-redux';

import {Sparklines,SparklinesLine} from 'react-sparklines';
class WeatherList extends Component{
    renderWeatherData(cityData){
class WeatherList extends Component {
    renderWeatherData(cityData) {


        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
return(
    <tr key={name}>
        <td>{name}</td>
        <td>
            <Sparklines width={180} height={120} data={temps} >
                <SparklinesLine color="red" />
            </Sparklines>
        </td>
    </tr>
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
        );
    }
    render(){
        return(
    render() {
        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temprature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
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
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherData)}
                </tbody>

            </table>
        );
    }
}

function mapStateToProps(state){
    return{
        weather:state.weather
function mapStateToProps(state) {
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList)
