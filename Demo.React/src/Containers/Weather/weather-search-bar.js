import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../../Actions/Weather/index';

class WeatherSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }
    onFormSubmit(event) {
        event.preventDefault();
        //we need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Search By Cities names to get weather"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span>
                    <button type='Submit' className="btn-secondary" >Submit</button>
                </span>
            </form>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(WeatherSearchBar);