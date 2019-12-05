import React from 'react';
import './Navbar.css';
import Register from '../Register/Register';
import Login from '../Login/Login';

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
                <li className="nameTag"> RT Cuts</li>
                <li><button onClick={(event)=>this.showRegistration()} className="header-btn"> Sign Up </button> </li>
                <li><button onClick={(event)=>this.showLogin()} className="header-btn"  > Login </button>  </li>
                </>
                : 
                <>
                <li className="nameTag"> RT Cuts</li>
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