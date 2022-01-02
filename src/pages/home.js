import "./home.css";
import Logo from ".././images/singhsupplylogoblack.png";
import Jordan from ".././images/jordanShoe.jpg";
import GraphicsCard from ".././images/tx 3080.jpeg";
import Ps5 from ".././images/PS5.jpg";
import IgLogo from ".././images/iglogo.png";
import TwitterLogo from ".././images/twitterlogo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Footer from ".././components/footer.js";

function Home() {

    return (



        <body>
            <div class="overlay">

                <h2 class="homeWelcome">Welcome to</h2>

                <h1 class="main-heading">Singh Supply</h1>

                <img class="logoBlack" src={Logo} alt="" />
            </div>


            <div class="aboutUs">
                <h2 className="aboutHeading">Who Are We?</h2>
                <div class="center">
                    <p className="aboutDescription">Singh Supply is a business based in Windsor, Ontario selling some of the world's hottest items including rare sneakers, game consoles
                        graphics cards, and more.</p>
                    <p className="aboutDescription">We offer competitive prices, top quality, and products that you can't get anywhere else!</p>
                    <div className="imagesContainer">
                        <img class="jordanImage" src={Jordan} alt="" />
                        <img class="ps5Image" src={Ps5} alt="" />
                        <img class="gpuImage" src={GraphicsCard} alt="" />
                    </div>
                </div>
            </div>

            <div className="contact">
                <h2 className="referencesHeading">What Others Have Said About Us</h2>
                <div className="referencesContainer">

                    <div className="referenceBox">
                        <img className="referenceLogo" src={IgLogo} alt="" />
                        <p className="referenceMessage">"Smooth and easy transaction. Very easy to talk to and nice people. Would definetely do business again"</p>
                        <p className="referenceName">@air.toby</p>
                    </div>

                    <div className="referenceBox">
                        <img className="referenceLogoT" src={TwitterLogo} alt="" />
                        <p className="referenceMessage">"Second deal bought a PS5 and was very chill, will do business again 🤝🤝"</p>
                        <p className="referenceName">@ont.sneakers</p>
                    </div>

                    <div className="referenceBox">
                        <img className="referenceLogo" src={IgLogo} alt="" />
                        <p className="referenceMessage">"Multiple deals done and much more to come. My go to guy before anyone. As legit as they come 🙌"</p>
                        <p className="referenceName">@windzkikz</p>
                    </div>
                </div>

                <a href="#">
                    <FontAwesomeIcon className="arrowUp" icon={faArrowUp}></FontAwesomeIcon>
                </a>

            </div>

            <Footer></Footer>

        </body>
    );
}

export default Home;