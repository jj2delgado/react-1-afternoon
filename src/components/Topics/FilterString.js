import React, {Component} from 'react';

export default class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            names: ['Juan', 'Sara', 'Liam', 'Sebastian', 'Sophia', 'Elijah'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    filterNames(){
        
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzletext"> Names: { JSON.stringify(this.state.names, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Click here to filter</button>
                <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredNames,null, 10) }</span>
            </div>
        )
    }
}