import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import '../Appointments/Appointments.css';


class EditApptModal extends Component{
    state={
        date: new Date(),
        time: "",
    }
    createOptions = () => {
        const options = [
            {value:"09:00:00", label:"9:00" },
            {value:"09:30:00", label:"9:30"},
            {value:"10:00:00", label:"10:00" },
            {value:"10:30:00" , label:"10:30" },
            {value:"11:00:00", label:"11:00" },
            {value:"11:30:00", label:"11:30"},
            {value:"12:00:00", label:"12:00"},
            {value:"12:30:00", label:"12:30"},
            {value:"13:00:00" , label:"1:00"},
            {value:"13:30:00" , label:"1:30" },
            {value:"14:00:00" , label:"2:00"},
            {value:"14:30:00" , label:"2:30"},
            {value:"15:00:00", label:"3:00"},
            {value:"15:30:00", label:"3:30"},
            {value:"16:00:00" , label:"4:00"},
            {value:"16:30:00" , label:"4:30" },
            {value:"17:00:00" , label:"5:00"}
        ]
        return options;
    }

    dateChange = (date) => {
        this.setState({ date });
        console.log(date);
    }

    timeChange = (time) => {
        this.setState({ time });
        console.log(time)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userId = localStorage.getItem('uid');
        axios.put(`${process.env.REACT_APP_API_URL}/appts/${userId}`, this.state,{
            withCredentials: true,
        })
        .then((res)=>{
            console.log(res);
            this.props.updateAppt(res.data.data)
            document.getElementById('reveal-edit').style.display='none';
        })
        .catch((err)=> console.log(err))
    };

    render(){
        return(
            <div className="calendar reveal-edit">
                <Calendar 
                className="apptCalendar"
                onChange={this.dateChange}
                value={this.state.date}

                />
            <Dropdown onChange={this.timeChange} value={this.state.time} options={this.createOptions()} />
            <button className="apptBtn" type="submit" onClick={this.handleSubmit}>Confirm</button>
            </div>
        );
    }
}

export default EditApptModal;

