import {Component} from "react";

export class Calculator extends Component{
    constructor(){
        super();
        this.state = {age: 0};
    }

    handleChange = (event) => {
        let dob = document.getElementById("dob").value;
        if(dob === ""){
            alert("Please enter your date of birth");
            return;
        }
        let dobDate = new Date(dob);
        let todayDate = new Date();
        let age1 = todayDate.getFullYear() - dobDate.getFullYear();
        this.setState({age: age1});
    }

    render(){
        return(
            <center>
                <div>
                    <h1>Age Calculator</h1>
                    <p><strong>Enter your date of birth</strong></p>
                    <input type="date" id="dob" style={{width:"250px", marginBottom:"10px", padding:"5px"}}></input>
                    <div><button style={{backgroundColor:"#007bff", color:"white", border:"0px", padding:"10px 20px", borderRadius:"5px"}} onClick={this.handleChange}>Calculate Age</button></div>
                    <h2>Your are {this.state.age} years old</h2>
                </div>
            </center>
        );
    }
}