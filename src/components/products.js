import { IonIcon } from "@ionic/react";
import { Button } from "./hero";
import { bagOutline, playBackCircleOutline, eyeOutline } from "ionicons/icons";




/* Part 1 */

function Product({source, altt, title, price}) {
    return(
        <div className="box">
            <img src={source} alt={altt} />
            <div className="info">
                <h5>{title}</h5>
                <span>{price}</span>

                <div className="butts">
                    < Button className="btn">
                        <IonIcon icon={eyeOutline} />
                        <span>Quick View</span>
                    </Button>
                    <Button className="btn">
                        <IonIcon icon={bagOutline} />
                        <span>Add To Cart</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function Gallery() {
    return(
        <div className="parte1">
            <ul className="menu">
                <li>All</li>
                <li>Red Wines</li>
                <li>White Wines</li>
                <li>Rose Wines</li>
            </ul>

            <div className="gallery">
            <Product source="" altt="riosling" title="Riosling" price="Ksh 7,000" />
            <Product source="" altt="Pinot" title="Pinot Noir" price="Ksh 10,800" />
            <Product source="" altt="Pinot" title="Pinot Gridio" price="Ksh 9,300" />
            <Product source="" altt="marlot" title="Marlot" price="Ksh 11,800" />
            </div>
        </div>

        
    );
}


    /* part 2 */

    function Banner() {
        return(
            <div className="banner">
                <h3>Discover, Taste, Enjoy</h3>
                <div className="dash"></div>
                <p>
                    When you first start smelling wine, think big to small. Are there fruits? Think of broad categories first, i.e citrus, orchard or tropical fruits in whites or, when tasting reds, red fruits, blue fruits, or black fruits.
                </p>
                <div className="play">
                    <IonIcon icon={playBackCircleOutline} />
                    <span>video showcase 03:40</span>
                </div>
            </div>
        );
    }


    /*part3 */

function Countdown() {
    return(
        <div className="count">
            <h4>riesling</h4>
            <div className="content">
                <div className="left">
                    <h5>what's new?</h5>
                    <h2>A Sunny Wine Icon</h2>
                    <div className="dash"></div>
                </div>

                <div className="center">
                    <img src="" alt="wrapped" />
                </div>

                <div className="right">
                    <h3><span>Ksh 12,400</span> Ksh 10,800</h3>
                    <div className="hours">
                        <span>69 <br /> hours</span>
                        <span>44 <br /> minutes</span>
                        <span>28 <br />seconds</span>
                    </div>
                    <button className="count-btn">shop now</button>
                </div>
            </div>
        </div>
    );
}


/*part4 */

function Review() {
    const people = [
        {
            id: 1,
            name: 'Mike Oduor',
            location: 'Kitengela, Nairobi',
            source:''
        },
        {
            id: 2,
            name: 'Kiplagat John',
            location: 'Nakuru',
            source: ''
        },
        {
            id: 3,
            name: 'Mercy Mwaniki',
            location: 'Thika, Nairobi',
            source: ''
        }
    ]
    return(
        <div className="review">
            
            {people.map(person =>
                <div className="info" key={person.id}>
                    <img src={person.source} alt={person.name} />
                    <h3>{person.name}</h3>
                    <h5>{person.location}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iste. Commodi voluptatem</p>
                </div>
            )}
        </div>
    );
}

function Reviews() {
    return(
        <div className="reviews">
            <img src="" alt="sipping wine" />
            <div className="float__right">
                <h3>What Get People Saying</h3>
                <Review />
                <button className="navigation"></button>
            </div>
        </div>
    );
}



    /* default func */

const Products = () => {
    return ( 
        <div className="products">
            <h3>Our Products</h3>
            <Gallery />
            <Banner />
            <Countdown />
            <Reviews />
        </div>
     );
}
 
export default Products;