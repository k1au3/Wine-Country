
/* Blog */

import { IonIcon } from "@ionic/react";
import { arrowUp, logoFacebook, logoGoogle, logoInstagram, logoTwitter, logoYoutube } from "ionicons/icons";


function Blog({source, blogTitle, date}){
    return(
        <div className="blog">
            <img src={source} alt="blog" />
            <div className="content">
                <span>{blogTitle}</span>
                <span>{date}</span>
            </div>
        </div>
    );
}
function Blogs(){
    return(
        <div className="blogs">
            <h2>Wize Blog</h2>
            <div className="dash"></div>
            <Blog source="" blogTitle="The Process Behind Our Award-Winning Wines" date="January 16 2023" />
            <Blog  source=""  blogTitle="Varietal Labelling of New World Wines"  date="March 10 2023" />
            <Blog  source=""  blogTitle="Daily Wines News in Favour of Reds"  date="March 23 2023" />
            <Blog  source=""  blogTitle="Good Wine Comes to those who Wait"  date="May 10 2023" />
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
                <input type="text" />  {/*look into it */}
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
                    <span>Back to Top</span>
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
                    <span> &copy 2023 WIZE. All rights reserved</span>
                </div>

                <div className="location">
                    <h4>our location</h4>
                    <span>01000 Tom Mboya st, Nairobi</span>
                </div>

                <div className="hotline">
                    <h4>24/7 hotline</h4>
                    (254)12 345 678
                </div>

                <div className="cards">
                    <img src="" alt="card" />
                    <img src="" alt="card" />
                    <img src="" alt="card" />
                    <img src="" alt="card" />
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