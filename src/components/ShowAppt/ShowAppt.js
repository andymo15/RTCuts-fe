import React, { Component } from 'react';
import { thisExpression } from '@babel/types';


class ShowAppt extends Component {
    render() {
        return(
            <div className='appt-container'>
                <h2>Your Upcoming Appointment Info!</h2>
                <p>{this.props.apptData.date}</p>
                {/* <p>{this.props.apptData.time.value}</p>   */}
                
            </div>
        )
    }
}

export default ShowAppt;