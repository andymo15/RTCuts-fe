import React from 'react';
import board from '../../content/Board.png';
import haircut4 from '../../content/haircut4.jpg';
import haircut3 from '../../content/haircut3.jpg';
import haircut5 from '../../content/haircut5.jpg';
import barberpole from '../../content/barberpole.gif';
import source from '../../content/source.gif';
import './HomePage.css';

// import { url } from 'inspector';

const HomePage = () => {
    return(
        <section className="board-container">
            <aside>
            <div className="pole">
            <img src={source} alt="" />
            </div>
            <div className="pole1">
            <img src={source} alt="" />
            </div>
            <div className="board" style={{ backgroundImage: `url(${board})` }}>
                <div className="pricingMenu">
                    <h2 className="title"> <b>RT Cuts</b> </h2>
                    <p className="menu-items"> Price: $35 </p>
                </div>
                <div className="container-holder">
                <div className="row img-container">
                <img src={haircut4} alt="" className="picture" />
                <img src={haircut3} alt="" className="picture" />
                <img src={haircut5} alt="" className="picture" />
                </div>
                </div>
            </div>
            </aside>
        </section>
    )
}

export default HomePage;