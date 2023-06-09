import { IonIcon } from "@ionic/react";
import { Button } from "./hero";
import { arrowForward, bagOutline, caretForwardOutline, eyeOutline, playCircleOutline } from "ionicons/icons";
import product1 from '../resources/images/prod/p1.webp';
import product2 from '../resources/images/prod/p2.webp';
import product3 from '../resources/images/prod/p3.webp';
import product4 from '../resources/images/prod/p7.webp';
import wrapped from '../resources/images/prod/wr2.jpg';
import React, {useState} from "react";
import customer1 from '../resources/images/customer.jpeg';
import customer2 from '../resources/images/customer2.jpg';
import customer3 from '../resources/images/customer3.webp'





/* Part 1 */

function Product({source, altt, title, price}) {
    return(
        <div className="box">
            <img src={source} alt={altt} />
            <div className="info">
                <h5>{title}</h5>
                <span className="price">{price}</span>

                <div className="butts">
                    < Button className="prod-btn">
                        <IonIcon icon={eyeOutline} />
                        <span>Quick View</span>
                    </Button>
                    <Button className=" prod-btn">
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
            <Product source={product1} altt="riosling" title="Riosling" price="Ksh 7,000" />
            <Product source={product2} altt="Pinot" title="Pinot Noir" price="Ksh 10,800" />
            <Product source={product3} altt="Pinot" title="Pinot Gridio" price="Ksh 9,300" />
            <Product source={product4} altt="marlot" title="Marlot" price="Ksh 11,800" />
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
                    <IonIcon id="icon" icon={playCircleOutline} />
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
                    <img src={wrapped} alt="wrapped" />
                </div>

                <div className="right">
                    <h3><del>Ksh12,400</del> Ksh10,800</h3>
                    <div className="hours">
                        <span><h5>69</h5> <br /> hours <br /></span>
                        <div className="line"></div>
                        <span><h5>44</h5><br /> minutes <br /></span>
                        <div className="line"></div>
                        <span><h5>28</h5> <br />seconds <br /></span>
                    </div>
                    <button className="count-btn">shop now <IonIcon icon={arrowForward} /></button>
                </div>
            </div>
        </div>
    );
}


/*part4 */



function Reviews() {
    const people = [
        {
            id: 1,
            name: 'Mike Oduor',
            location: 'Kitengela, Nairobi',
            source:customer1
        },
        {
            id: 2,
            name: 'Kiplagat John',
            location: 'Nakuru',
            source: customer2
        },
        {
            id: 3,
            name: 'Mercy Mwaniki',
            location: 'Thika, Nairobi',
            source: customer3
        }
    ];
    const[currentReview, setCurrentReview] =useState(0);
    const handleNextReview =() => {
        setCurrentReview(currentReview === people.length -1 ? 0 : currentReview + 1);
    };
    const {name, location, source } = people[currentReview];
    return(
        <div className="review">
            
            <div className="float__right">
                <h3>What people are saying</h3>
                <div className="info">
                    <img src={source} alt={name} />
                    <h3>{name}</h3>
                    <h5>{location}</h5>
                    <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, iste. Commodi voluptatem"</p>
                </div>
                <button className="navigation" onClick={handleNextReview}><IonIcon icon={caretForwardOutline} /></button>
            </div>
            <div className="image">
            {/* <img src={sip} alt="sippwine" /> */}
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