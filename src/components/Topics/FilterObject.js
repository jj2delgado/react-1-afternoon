import React, {Component} from 'react';

export default class FilterObject extends Component{
    constructor(){
        super()

        this.state = {
            employees: [
                {
                    name: 'Jimmy John',
                    title: 'Customer Rep',
                    age: 21,
                    hobby: 'facebook'
                },
                {
                    name: 'Ronald McDonald',
                    title: 'Manager',
                    age: 40
                },
                {
                    name: 'Eric Cartman',
                    title: 'jerk',
                    age: 10,
                    racist: 'yes'
                }
            ],
            userInput: '',
            filteredEmployees: []
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    filterEmployees(objProperty){
        let employees = this.state.employees
        let filteredEmployees = []

        for(let i = 0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(objProperty)){
                filteredEmployees.push(employees[i])
            }
        }
        this.setState({filteredEmployees: filteredEmployees})
    }
    
    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.employees, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={(e) => this.filterEmployees(this.state.userInput) }> Click to Filter Objects</button>
                <span className="resultsBox filterObjectRB">Filtered Object: { JSON.stringify(this.state.filteredEmployees, null,10) } </span>
            </div>
        )
    }
}