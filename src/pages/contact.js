import "./contact.css";
import IGLogo from ".././images/iglogo.png";
import Footer from ".././components/footer.js";

function Contact() {


    return (

        <body>

            <div class="contactOverlay">

                <h1 class="heading">Get in Touch with Us</h1>



                <div class="row">

                    <a class="igLogo" href="https://www.instagram.com/singhsupply/" target="_blank">
                        <img class="igLogo" src={IGLogo} alt="" />
                    </a>
                    <a href="https://www.instagram.com/singhsupply/" class="instagram">Instagram</a>
                    <p class="igDescription"> Want more up to date information on our products? Check out the Instagram page for the latest news!</p>
                </div>

            </div>


            <div className="divider"></div>
            <div className="divider"></div>
            <div className="divider"></div>
            <div className="divider"></div>

            <Footer className="contactFooter"></Footer>

        </body>
    );
}

export default Contact;