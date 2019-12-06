import React, { Component } from 'react';
import Calendar from 'react-calendar';
// import axios from 'axios';
import './Appointments.css';


class Appointments extends Component{
    state={
        date: new Date()
        /*time: ??? */
    }

    handleChange = (date) => {
        this.setState({ date });
        console.log(date);
    }
    render(){
        return(
            <div className="calendar">
                <Calendar 
                className="apptCalendar"
                onChange={this.handleChange}
                value={this.state.date}
                />
                
            </div>
        );
    }
}

export default Appointments;

