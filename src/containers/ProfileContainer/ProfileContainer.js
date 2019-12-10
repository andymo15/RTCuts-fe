import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import ShowAppt from '../../components/ShowAppt/ShowAppt';
import axios from 'axios';
import './ProfileContainer.css';

class ProfileContainer extends Component {
    state = {
        profile: {},
        appts: [],
        updatedStatus: false
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
                appts: res.data.data,
            });
            console.log(res);
        })
        .catch((err) => console.log(err));
        }

        // updateAppt = (updatedAppt) =>{
        //     this.setState({
        //         appts: updatedAppt
        //     })
        // }

        updateCompleted = (data) => {
            let updatedAppts = [...this.state.appts];
            let index = updatedAppts.findIndex(element => element._id === data._id)
            updatedAppts[index] = data;
            this.setState({
                appts: updatedAppts,
            })
        }

        handleDelete = (id) =>{
            axios.delete(`${process.env.REACT_APP_API_URL}/appts/delete/${id}`, {
                withCredentials: true,
            })
            .then((res)=>{
                console.log("Success")
                let updatedAppts = this.state.appts.filter(appt=> appt._id !== id)
                this.setState({appts: updatedAppts});
            })
            .catch((err)=> console.log(err))
            }
        displayAppts = appts => {
            return appts.map(appt=>{
                return(
                    <>
                    <ShowAppt
                    apptData={appt}
                    key={appt._id}
                    updateAppt={this.updateAppt}
                    updateCompleted={this.updateCompleted}
                    handleDelete={this.handleDelete} />
                    </>
                )
            })
        }



    render(){
        console.log(this.state.appts[0])
        return(
            <>
            <div className="row">
            <Profile profile={this.state.profile} className="column"/>
            <div className="column upcomingAppt"> 
            {this.displayAppts(this.state.appts)}
            </div>
            </div>
            </>
        )
    }
}


export default ProfileContainer;