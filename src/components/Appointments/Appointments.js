import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import axios from 'axios';
import './Appointments.css';


class Appointments extends Component{
    state={
        date: "",
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
        console.log(this.state);
        axios.post(`${process.env.REACT_APP_API_URL}/appts/`, this.state,
        {withCredentials: true})
            .then((res)=>{
                console.log(res);
            })
    };

    render(){
        return(
            <div className="calendar">
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

export default Appointments;

