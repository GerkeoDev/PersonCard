// import React, { Component } from 'react';
    
    
// class PersonCard extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             position: this.props.age 
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.firstName}, {this.props.lastName}</h1>
//                 <p>Age: {this.state.position}</p>
//                 <p>Hair Color: {this.props.hairColor}</p>
//                 <button onClick={this.ageSwitch}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
//             </div>
//         )
//     }
//     ageSwitch = () =>{
//         this.setState({position: this.state.position + 1})
//     }
// }
    
// export default PersonCard;
import React from "react";
const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCard