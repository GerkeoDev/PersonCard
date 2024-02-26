import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            position: this.props.age 
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.position}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.ageSwitch}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
    ageSwitch = () =>{
        this.setState({position: this.state.position + 1})
    }
}
    
export default PersonCard;
