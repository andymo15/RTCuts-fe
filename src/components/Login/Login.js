import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends Component {
    state={
        email:'',
        password:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
            withCredentials:true,
        })
            .then((res)=>{
                this.props.setCurrentUser(res.data.data);
                console.log(res.data);
                document.getElementById('reveal-login').style.display="none";
                this.props.history.push('/profile');
            })
            .catch((err)=>console.log(err));
    };
    render(){
        if(!this.props.showLogin){
            return null;
        }
        return(
            <div className="container mt-4" id="reveal-login">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <h4 className="mb-3">Login</h4>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" placeholder="Email" value={this.state.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={this.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" placeholder="Password" value={this.state.password}/>
                </div>
                <button className="btn btn-lg btn-block btn-outline-secondary" type="submit">Login</button>
                </form>
            </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Login);