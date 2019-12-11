import React from 'react';
import Register from '../Register/Register';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import './Navbar.css';

class Navbar extends React.Component {
    state={
        showRegistration: false,
        showLogin: false,
    }
    
    showRegistration = (event) =>{
        this.setState(prevState=>({
            showRegistration: !prevState.showRegistration
        })
    )};

    showLogin = (event) =>{
        this.setState(prevState=>({
            showLogin: !prevState.showLogin
        })
    )};

    logout = (event) => {
        this.props.logout();
    }

    render(){
        return(
            <>
        <nav>
            {/* <div className="logo">
                RT Cuts
            </div> */}
            <div className="menu">
                <ul>
                    {!this.props.currentUser ?
                <>
                <li> <NavLink className="nameTag nav-link" to="/"> RT Cuts </NavLink> </li>
                <li><button onClick={(event)=>this.showRegistration()} className="header-btn"> Sign Up </button> </li>
                <li><button onClick={(event)=>this.showLogin()} className="header-btn"  > Login </button>  </li>
                </>
                : 
                <>
                <li> <NavLink className="nameTag nav-link" to="/"> RT Cuts </NavLink> </li>
                <li><NavLink className="nav-link"  to="/profile" > Profile </NavLink></li>
                <li><button onClick={(event)=>this.logout()} className="header-btn" type="button" > Logout </button> </li>
                </>
                    }
                </ul>
            </div>
        </nav>
        <Register showRegistration={this.state.showRegistration} />
        <Login showLogin={this.state.showLogin} setCurrentUser={this.props.setCurrentUser} />
        </>
        )
    }
}

export default Navbar;