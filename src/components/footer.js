
/* Blog */

import { IonIcon } from "@ionic/react";
import { arrowUp, logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoYoutube, refreshCircleOutline } from "ionicons/icons";
import blog1 from '../resources/images/blog1.jpg';
import blog2 from '../resources/images/blog2.jpg';
import blog3 from '../resources/images/blog3.webp';
// import blog4 from '../resources/images/blog4.avif';
import blog5 from '../resources/images/blog5.webp';
import card1 from '../resources/images/icons/credit-card.png';
// import card2 from '../resources/images/icons/cryptowallet.png';
// import card3 from '../resources/images/icons/money.png';
import card4 from '../resources/images/icons/visa.png'


function Blog({source, blogTitle, date}){
    return(
        <div className="blog">
            <img src={source} alt="blog" />
            <div className="content">
                <p>{blogTitle}</p>
                <span>{date}</span>
            </div>
        </div>
    );
}
function Blogs(){
    return(
        <div className="blogs">
            <h2>Wize Blog</h2>
            {/* <div className="dashh"></div> */}
            <div className="blog__gallery">
                <Blog source={blog1} blogTitle="The Process Behind Our Award-Winning Wines" date="January 16 2023" />
                <Blog  source={blog3} blogTitle="Varietal Labelling of New World Wines"  date="March 10 2023" />
                <Blog  source={blog5} blogTitle="Daily Wines News in Favour of Reds"  date="March 23 2023" />
                <Blog  source={blog2} blogTitle="Good Wine Comes to those who Wait"  date="May 10 2023" />
            </div>
            <div className="dash"></div>
        </div>
    );
}


/* newsletter */

function Newsletter() {
    return(
        <div className="newsletter">
            <h3>Subscribe for newsletter</h3>
            <span>Get updates by subscribing to our weekly newsletter ro receive the lates news, events & promotions</span>
            <div className="input">
                <form action="/subscribe" method="POST">
                    {/* <label for="email">Email:</label> */}
                    <input type="email" id="email" name="Enter your email" required />
                    <button className="btn" type="submit">Subscribe</button>
                </form>
            </div>
        </div>
    );
}


 /* footer */

function Foot(){
    return(
        <div className="foot">
            <button className="foot-bt">
                <a href="#top" className="to-top">
                    <IonIcon icon={arrowUp} />
                    <h5>Back to Top</h5>
                </a>
            </button>
            <div className="dash"></div>
            <ul>
                <li>home</li>
                <li>Online store</li>
                <li>newsletter</li>
                <li>promotion</li>
                <li>privacy policy</li>
                <li>terms of use</li>
                <li>sitemap</li>
            </ul>
            <div className="dash"></div>

            <div className="furthest__end">
                <div className="logo">
                    <h2>wize</h2>
                    <span>winery</span>
                </div>

                <div className="social">
                    <div className="icons">
                        <IonIcon icon={logoFacebook} />
                        <IonIcon icon={logoTwitter} />
                        <IonIcon icon={logoGoogle} />
                        <IonIcon icon={logoYoutube} />
                        <IonIcon icon={logoInstagram} />
                    </div>
                    <h5> <IonIcon icon={refreshCircleOutline} /> 2023 WIZE. All rights reserved</h5>
                </div>

                <div className="location">
                    <h4>our location</h4>
                    <span>01000 Tom Mboya st, Nairobi</span>
                </div>

                <div className="hotline">
                    <h4>24/7 hotline</h4>
                    <span>(254)12 345 678</span>
                </div>

                <div className="cards">
                    <img src={card1} alt="card" />
                    <img src={card4} alt="card" />
                    <img src={card1} alt="card" />
                    <img src={card4} alt="card" />
                </div>
            </div>
        </div>
    );
}


/* default */
const Footer = () => {
    return (  
        <div className="last__part">
            <Blogs />
            <Newsletter />
            <Foot />
        </div>
    );
}
 
export default Footer;