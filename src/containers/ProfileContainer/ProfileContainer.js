import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Profile from '../../components/Profile/Profile';
import ShowAppt from '../../components/ShowAppt/ShowAppt';
import Appointments from '../../components/Appointments/Appointments';
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
        })
        .catch((err)=> console.log(err));

        //get appointment data
        axios.get(`${process.env.REACT_APP_API_URL}/appts/show/${userId}`)
        .then((res)=>{
            this.setState({
                appts: res.data.data,
            });
        })
        .catch((err) => console.log(err));
        }

        // updateAppt = (updatedAppt) =>{
        //     this.setState({
        //         appts: updatedAppt
        //     })
        // }

        handleCompleted =(data) => {
            let newAppts = [...this.state.appts];
            newAppts.push(data)
            this.setState({
                appts: newAppts,
            })
        }

        
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
                    handleDelete={this.handleDelete}
                    />
                    </>
                )
            })
        }



    render(){
        return(
            <>
            <div className="row">
                {/* <div className="column">
                    <Profile profile={this.state.profile}/>
                </div> */}
                <div className="column calendar-column">
                <h2>Schedule an Appointment</h2>
                <Appointments handleCompleted={this.handleCompleted} />
                </div>
                <div className="column upcomingAppt">
                    <h2 className="schedule-appt">Your Upcoming Appointments</h2>
                    <div className="apptRow">
                    {this.displayAppts(this.state.appts)}
                </div>
                </div>
            </div>
            </>
        )
    }
}


export default withRouter(ProfileContainer);