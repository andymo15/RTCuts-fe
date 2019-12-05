import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class Register extends Component {
    state = {
        name:'',
        email:'',
        password:'',
        password2:'',
        phoneNumber:'',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state)
            .then((res)=>{
                console.log(res);
                document.getElementById('registerModal').style.display='none';
            })
            .catch((err)=>{console.log(err)});
    }

    render(){
        if(!this.props.showRegistration){
            return null;
        }
        return(
        <div className="container mt-4" id="registerModal">
        <div className="row">
            <div className="col-md-4 offset-md-4">
            <h4 className="mb-3">Register</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label className="label" htmlFor="name">Name</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="name" name="name" value={this.state.name}/>
                </div>
                <div className="form-group">
                <label className="label" htmlFor="name">Email</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={this.state.email} />
                </div>
                <div className="form-group">
                <label className="label" htmlFor="name">Phone Number</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="text" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} />
                </div>
                <div className="form-group">
                <label className="label" htmlFor="name">Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={this.state.password}/>
                </div>
                <div className="form-group">
                <label className="label" htmlFor="password2">Confirm Password</label>
                <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={this.state.password2}/>
                </div>
                <button type="submit" className="nav-link">Sign Up </button>
            </form>
            </div>
        </div>
        </div>
        )
    }
}

export default Register;
