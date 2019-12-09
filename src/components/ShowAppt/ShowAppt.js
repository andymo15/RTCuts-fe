import React, { Component } from 'react';
import EditAppt from '../EditAppt/EditAppt';


class ShowAppt extends Component {
    state={
        showEdit: false,
    }

    showEdit = (event) => {
        this.setState(prevState=>({
            showEdit: !prevState.showEdit
        })
    )};
    render() {
        return(
            <div className='appt-container'>
                <h2>Your Upcoming Appointment Info!</h2>
                <p>{this.props.apptData.date}</p>
                {/* <p>{this.props.apptData.time.value}</p>   */}
                <button onClick={(event)=>this.showEdit()}> Edit </button>
                <button className="apptBtn" type="submit" onClick={this.handleDelete}>Delete</button>
                <EditAppt updateAppt={this.props.updateAppt} showEdit={this.state.showEdit} />
                
            </div>
        )
    }
}

export default ShowAppt;