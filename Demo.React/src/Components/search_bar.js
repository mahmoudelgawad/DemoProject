import React, { Component } from "react"
class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        //to let input work with this hell
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    render() {

        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={this.onChangeInput} />
                Value of the input : {this.state.term}
            </div>
        );
    }
    onChangeInput(event) {
        let term =  event.target.value;
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;