import React,{ Component } from 'react';
import Navbar from './components/Navbar/Navbar';
// import Carousel from './components/Carousel/Carousel';
import axios from 'axios';


class App extends Component {
    state = {
      currentUser: localStorage.getItem('uid'),
    }

    setCurrentUser=(userId)=>{
      console.log(userId);
      this.setState({
        currentUser: userId
      });
      localStorage.setItem('uid', userId);
    }

    logout = () => {
      localStorage.removeItem('uid');
      axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`,{
      withCredentials: true,
      })
        .then(res => {
          console.log(res);
          this.setState({currentUser: null});
        })
        .catch(err => console.log(err));
    }
  render(){
    return(
      <>
      <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
      {/* <Carousel /> */}
      </>
    )
  }
}
export default App;
