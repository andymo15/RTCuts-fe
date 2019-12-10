import React from 'react';
import board from '../../content/Board.png';
import haircut4 from '../../content/haircut4.jpg';
import haircut3 from '../../content/haircut3.jpg';
import './HomePage.css';

// import { url } from 'inspector';

const HomePage = () => {
    return(
        <section className="board-container">
            <div className="board" style={{ backgroundImage: `url(${board})` }}>
                <div className="pricingMenu">
                    <h2> RT Cuts </h2>
                </div>
                <div className="row img-container">
                <img src={haircut4} alt="" className="picture" />
                <img src={haircut3} alt="" className="picture" />
                </div>
            </div>
        </section>
    )
}

export default HomePage;