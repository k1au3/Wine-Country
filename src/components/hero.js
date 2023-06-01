// import { Fragment } from "react";
import React from "react";
import { IonIcon } from '@ionic/react';
import {personOutline, bagOutline, searchOutline, menuOutline} from 'ionicons/icons';


function Nav () {
    return ( 
        <nav className="nav">
            <div className="float__left">
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                    <li>Accessories</li>
                    <li>Promotion</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="float__center">
                <h2>Wize</h2>
                <span>Winery</span>
            </div>

            <div className="float__right">
                <ul>
                    <li><IonIcon icon={personOutline}/></li>
                    <li><IonIcon icon={bagOutline}/></li>
                    <li><IonIcon icon={searchOutline}/></li>
                    <li><IonIcon icon={menuOutline}/></li>
                </ul>
            </div>
        </nav>
     );
}

export function Button({className, children}) {
    return(
        <button className={className}>{children}</button>
    );
}

const Hero = () => {
    return ( 
        <div className="main">
            <Nav />
            <div className="hero">
                <span>Excelent Wine Collection</span>
                <h1>The Wine Country</h1>
                <div className="line-para">
                    <div className="line"></div>
                    <p>We introduce exelent collection of white and red wines. <br/> Feel the scent of sun and happiness</p>
                </div>
                <Button className="btn hero-btn">discover more </Button> 
            </div>
        </div>

     );
}
 
export default Hero;
 
