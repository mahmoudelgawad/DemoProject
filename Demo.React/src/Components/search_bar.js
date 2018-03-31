import React, { Component } from "react"
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    render() {

        return (
            <div>
                <input value={this.state.term} onChange={this.onChangeInput} />
                Value of the input : {this.state.term}
            </div>
        );
    }
    onChangeInput(event) {
        this.setState({ term: event.target.value });
    }
};

export default SearchBar;