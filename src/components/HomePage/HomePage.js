import React from 'react';
import board from '../../content/Board.png';
import haircut4 from '../../content/haircut4.jpg';
import haircut3 from '../../content/haircut3.jpg';
import haircut5 from '../../content/haircut5.jpg';
import source from '../../content/source.gif';
import './HomePage.css';


const HomePage = () => {
    return(
        <section className="board-container">
            <aside>
            <div className="pole">
            <img src={source} alt="" />
            </div>
            {/* <div className="pole1">
            <img src={source} alt="" />
            </div> */}
            <div className="board" style={{ backgroundImage: `url(${board})` }}>
                <div className="pricingMenu">
                    <h2 className="title"> <b>RT Cuts</b> </h2>
                    <p className="menu-items"> Price: $35 </p>
                    <p className="menu-description">Here at RT Cuts, I provide only the best and greatest haircuts in San Francisco. Not only 
                    are my cuts good, they're also fast! In 30 quick minutes you will be feeling yourself like you're Mac Dre.
                    </p>
                </div>
                <div className="container-holder">
                <div className="row img-container">
                    <p className="picture-description"> Here are some of my works. </p>
                <img src={haircut4} alt="" className="picture" />
                <img src={haircut3} alt="" className="picture2" />
                <img src={haircut5} alt="" className="picture" />
                </div>
                </div>
            </div>
            </aside>
        </section>
    )
}

export default HomePage;