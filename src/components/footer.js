import "./footer.css";
import Logo from ".././images/singhsupplylogo.png";
import IgLogo from ".././images/iglogo.png";

function Footer() {


    return (

        <body>

            <div className="footerContainer">

                <img className="footerLogo" src={Logo} alt="" />

                <div className="navContainer">
                    <div className="navContainerRow">
                        <a className="footerLink" href="/#">Home</a>
                        <a className="footerLink" href="/jordans">Jordan</a>
                    </div>

                    <div className="navContainerRow">
                        <a className="footerLink" href="/nike">Nike</a>
                        <a className="footerLink" href="/addidas">Addidas</a>
                    </div>
                    <a className="footerLink" href="/contact">Contact Us</a>
                </div>

                <div className="socialDiv">
                    <h3 className="socialsHeading">Check Out Our Socials!</h3>
                    <a href="https://www.instagram.com/singhsupply/">
                        <img className="igLogoSocials" src={IgLogo} alt="" />
                    </a>
                </div>

            </div>

        </body >
    );
}

export default Footer;