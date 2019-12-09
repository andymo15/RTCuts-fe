import React, { Component } from 'react';
import './Profile.css';
// import axios from 'axios';


class Profile extends Component {
    state = {
        showEdit: false,
    }

    showEdit = (event) => {
        this.setState(prevState=>({
            showEdit: !prevState.showEdit
        })
    )};

    render(){
        return(
            <div className="profCard">
                <p>Name: {this.props.profile.name} </p>
                <p>Email: {this.props.profile.email}</p>
                <p>Phone Number: {this.props.profile.phoneNumber} </p>
            </div>
        )
    }
};

export default Profile;