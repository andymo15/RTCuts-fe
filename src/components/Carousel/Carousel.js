import React, { Component } from 'react';
import './Carousel.css';
import RTCuts1 from '../../content/RTCuts1.mov';
import RTCuts2 from '../../content/RTCuts2.mov';
import RTCuts3 from '../../content/RTCuts3.mov';
import RTCuts4 from '../../content/RTCuts4.mov';
import RTCuts5 from '../../content/RTCuts5.mov';

class Carousel extends Component {


// rotateRight = (e) => {
// let currdeg = 0;
// if(e.data.d==="n"){
//     currdeg = currdeg - 60;
//     }
//     if(e.data.d==="p"){
//     currdeg = currdeg + 60;
//     }
//    document.getElementByClassName('carousel').style.webkit-transform="none";
//     document.getElementsByClassName('carousel').style({
//     "-webkit-transform": "rotateY(+60)",
//     "-moz-transform": "rotateY(+60)",
//     "-o-transform": "rotateY(+60)",
//     "transform": "rotateY(+60)",
//     });
// } 
render(){
    return(
<>
    <div className="container">
        <div className="carousel">
            <div className="item a">
                <video className="video"
                src={RTCuts1}
                autoPlay={true}
                loop={true}
                />
            </div>
            <div className="item b">
                <video className="video"
                src={RTCuts2}
                autoPlay={true}
                loop={true}
                />
            </div>
            <div className="item c">
                <video className="video"
                src={RTCuts3}
                autoPlay={true}
                loop={true}
                />
            </div>
            <div className="item d">
                <video className="video"
                src={RTCuts4}
                autoPlay={true}
                loop={true}
                />
            </div>
            <div className="item e">
                <video className="video"
                src={RTCuts5}
                autoPlay={true}
                loop={true}
                />
            </div>
            {/* <div className="item f">F</div> */}
        </div>
    </div>
    {/* <button onClick={(e)=>this.rotateRight()} className="next">Next</button>
    <button onClick={(e)=>this.rotate()} className="prev">Prev</button> */}
    </>

)
}
};


export default Carousel;
