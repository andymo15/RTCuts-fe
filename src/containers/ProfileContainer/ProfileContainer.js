import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import ShowAppt from '../../components/ShowAppt/ShowAppt';
import axios from 'axios';

class ProfileContainer extends Component {
    state = {
        profile: {},
        appts: [],
    }

    componentDidMount(){
        // get user data
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
            withCredentials: true,
        })
        .then((res)=>{
            this.setState({
                profile: res.data.data
            });
            console.log(res.data.data);
        })
        .catch((err)=> console.log(err));

        //get appointment data
        axios.get(`${process.env.REACT_APP_API_URL}/appts/show/${userId}`)
        .then((res)=>{
            this.setState({
                appts: res.data.data
            });
            console.log(res);
        })
        .catch((err) => console.log(err));
        }

        displayAppts = appts => {
            return appts.map(appt=>{
                return(
                    <>
                    <ShowAppt
                    apptData={appt}
                    key={appt.uid} />
                    </>
                )
            })
        }

    render(){
        return(
            <>
            <Profile profile={this.state.profile} />
            {this.displayAppts(this.state.appts)}
            </>
        )
    }
}


export default ProfileContainer;