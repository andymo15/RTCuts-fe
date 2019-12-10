import React, { Component } from 'react';
import EditAppt from '../EditAppt/EditAppt';
import './ShowAppt.css';


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
            <>
            <section className="appt-section row">
            <div className='appt-container'>
                <p>Date: {this.props.apptData.date && this.props.apptData.date.split('T')[0]}</p>
                {/* <p>Date: {this.props.apptData.date}</p> */}
                <p>Time: {this.props.apptData.time && this.props.apptData.time.label}</p>
                <button onClick={(event)=>this.showEdit()}>Edit</button>
                <button type="submit" onClick={()=>this.props.handleDelete(this.props.apptData._id)}>Delete</button>
            </div>
            </section>
            <div className="edit-appt">
            <EditAppt apptData={this.props.apptData} updateAppt={this.props.updateAppt} showEdit={this.state.showEdit} updateCompleted={this.props.updateCompleted} />
            </div>
            </>
        )
    }
}

export default ShowAppt;