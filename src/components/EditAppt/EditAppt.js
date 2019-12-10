import React, { Component } from 'react';
import EditApptModal from '../EditAppt/EditApptModal';

class EditAppt extends Component{
    state={
        date: "",
        time:'',
    }

    render(){
        if(!this.props.showEdit){
            return null;
        }
        return(
            <EditApptModal apptData={this.props.apptData} updateAppt={this.props.updateAppt} updateCompleted={this.props.updateCompleted}/>
        )
    }
};


export default EditAppt;