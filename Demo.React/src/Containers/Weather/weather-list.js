import React,{Component} from 'react';

import {connect} from 'react-redux';

import {Sparklines,SparklinesLine} from 'react-sparklines';
class WeatherList extends Component{
    renderWeatherData(cityData){
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

);
    }
    render(){
        return(
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temprature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                    </tr>
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
    };
}

export default connect(mapStateToProps)(WeatherList)
