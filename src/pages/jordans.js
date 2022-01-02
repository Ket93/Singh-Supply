import "./jordans.css";
import Showcase from ".././components/showcase.js"
import Jordan1retrohighog from ".././images/Jordans/jordan 1 retro high og.jpeg";
import Jordan3retropinegreen from ".././images/Jordans/jordan 3 retro pine green.jpg";
import Jordan4retrolightning from ".././images/Jordans/jordan 4 retro lightning.jpeg";
import Jordan4retrowhiteoreo from ".././images/Jordans/jordan 4 retro white oreo.jpeg";
import Jordan1retrohighogprototype from ".././images/Jordans/jordan 1 retro high og prototype.PNG";
import Jordan1retrohighpollen from ".././images/Jordans/jordan 1 retro high pollen.jpg";
import Jordan1retrohighwhiteuniversityblueblack from ".././images/Jordans/jordan 1 retro high white university blue black.jpeg";
import Jordan5retromoonlight from ".././images/Jordans/jordan 5 retro moonlight.PNG";
import Jordan11retrocoolgrey from ".././images/Jordans/jordan 11 retro cool grey.jpeg";
import Jordan12retroroyaltytaxi from ".././images/Jordans/jordan 12 retro royalty taxi.jpg";
import Jordan12retrotwist from ".././images/Jordans/jordan 12 retro twist.jpg";
import Footer from ".././components/footer.js";

function Jordans() {

    return (



        <body>

            <h1 class="jordanHeading">Available Jordan Shoes</h1>

            <hr />
            <div class="divider"></div>

            <div class="shoeContainer">
                <Showcase image={Jordan1retrohighog} text="Jordan 1 Retro High OG" price="$430.00" sizes={["6", "7", "8.5", "9"]} discount="$40.00"></Showcase>
                <Showcase image={Jordan1retrohighpollen} text="Jordan 1 Retro High Pollen" price="$250.00" sizes={["11", "12"]} discount=""></Showcase>
                <Showcase image={Jordan1retrohighwhiteuniversityblueblack} text="Jordan 1 Retro High White University Blue Black" price="$340.00" sizes={["6", "7", "9", "11", "13"]} discount="$50.00"></Showcase>
                <Showcase image={Jordan1retrohighogprototype} text="Jordan 1 Retro High OG Prototype" price="$200.00" sizes={["6", "8", "9", "10"]} discount=""></Showcase>
                <Showcase image={Jordan3retropinegreen} text="Jordan 3 Retro Pine Green" price="$290.00" sizes={["9", "10", "11"]} discount="$20.00"></Showcase>
                <Showcase image={Jordan4retrolightning} text="Jordan 4 Retro Lightning" price="$350.00" sizes={["10", "10.5", "12"]} discount=""></Showcase>
                <Showcase image={Jordan4retrowhiteoreo} text="Jordan 4 Retro White Oreo" price="$530.00" sizes={["6", "8", "9", "11", "13"]} discount="$35.00"></Showcase>
                <Showcase image={Jordan5retromoonlight} text="Jordan 5 Retro Moonlight" price="$255.00" sizes={["8", "9", "12"]} discount="$40.00"></Showcase>
                <Showcase image={Jordan11retrocoolgrey} text="Jordan 11 Retro Cool Grey" price="$290.00" sizes={["6", "10", "11", "12"]} discount=""></Showcase>
                <Showcase image={Jordan12retroroyaltytaxi} text="Jordan 12 Retro Royalty Taxi" price="$300.00" sizes={["7", "8", "11.5", "12"]} discount=""></Showcase>
                <Showcase image={Jordan12retrotwist} text="Jordan 12 Retro Twist" price="$280.00" sizes={["9", "10"]} discount="$30.00"></Showcase>
            </div>

            <Footer></Footer>

        </body>
    );
}

export default Jordans;