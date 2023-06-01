import { IonIcon } from "@ionic/react";
import { Button } from "./hero";
import { medicalOutline } from "ionicons/icons";
import grape  from '..//resources/images/icons/grape.png'
import champagne from '../resources/images/icons/champagne.png'
import wine from '../resources/images/icons/wine-glass.png' 
import cork from '../resources/images/icons/corkscrew.png'
import white from '../resources/images/prod/white.webp'
import red from '../resources/images/prod/red.jpg'



function Icon({source, title}) {
    return(
        <div className="icon">
                <img src={source} alt="icon"></img>
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veniam nemo, praesentium optio hic vel earum.</p>
            </div>
    );
}

function Icons() {
    return(
        <div className="icons">
            <Icon source={grape} title="Vineyard" />
            <Icon source={champagne} title="Wine Store" />
            <Icon source={wine} title="Restaurant" />
            <Icon source={cork} title="Our Story" />
        </div>
    );
}

function List({title}) {
    return(
        <div className="list">
            <IonIcon className="ion" icon={medicalOutline}/>
            <span>{title}</span>
        </div>
    );
}

function RedWhite(){
    return(
        <div className="container">
            <div className=" Cont">
                <img src={white} alt="white" />
                <div className=" top float">
                    <h5>since 2010</h5>
                    <h2>Perfect White Wines</h2>
                    <div className="lin"></div>
                    <p>After the harvest the grapes are taken into the winery and prepared for primary ferment. At this stage red wine making diverges from white wine making.
                    </p>
                    <List  title="Chardonnay" />
                    <List  title="Sauvignon Blanc" />
                    <List  title="Riosling" />
                    <Button className="btn shop">shop now</Button>
                </div>
            </div>

            <div className="Cont">
                
                <div className="bottom float">
                    <h5>since 2010</h5>
                    <h2>Perfect Red Wines</h2>
                    <div className="lin"></div>
                    <p>After the harvest the grapes are taken into the winery and prepared for primary ferment. At this stage red wine making diverges from white wine making.
                    </p>
                    <List icon="" title="Pinot Noir" />
                    <List icon="" title="Mariot" />
                    <List icon="" title="Caborrett Sauvighon" />
                    <Button className="btn shop">shop now</Button>
                </div>
                <img src={red} alt="red" />
            </div>
        </div>
    );
}




const Philosophy = () => {
    return ( 
        <div className="page2">
            <h2>Winemaking Philosophy</h2>
            <Icons />
            <RedWhite />
        </div>
     );
}
 
export default Philosophy;

