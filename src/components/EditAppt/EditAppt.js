import React, { Component } from 'react';
import EditApptModal from '../EditAppt/EditApptModal';
import axios from 'axios';

class EditAppt extends Component{
    state={
        date:'',
        time:'',
    }

    render(){
        if(!this.props.showEdit){
            return null;
        }
        return(
            <EditApptModal updateAppt={this.props.updateAppt}/>
        )
    }
};


export default EditAppt;