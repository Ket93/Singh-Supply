import "./addidas.css";
import Showcase from ".././components/showcase.js"
import Addidastreyyoung1icetrae from ".././images/Addidas/addidas trey young 1 ice trae.jpg";
import Addidasyeezy450darkslate from ".././images/Addidas/addidas yeezy 450 dark slate.jpg";
import Addidasyeezy500claybrown from ".././images/Addidas/addidas yeezy 500 clay brown.jpg";
import Addidasyeezyboost350v2light from ".././images/Addidas/addidas yeezy boost 350 v2 light.jpg";
import Addidasyeezy350v2mxoat from ".././images/Addidas/addidas yeezy boost 350 v2 mx oat.jpg";
import Addidasyeezy700fadedazure from ".././images/Addidas/addidas yeezy boost 700 faded azure.jpg";
import Addidasyeezy700mnvnbluetint from ".././images/Addidas/addidas yeezy boost 700 mnvn blue tint.jpg";
import Addidasyeezy700washorange from ".././images/Addidas/addidas yeezy boost 700 wash orange.jpg";
import Addidasyeezyslideglowgreen from ".././images/Addidas/addidas yeezy slide glow green.jpg";
import Addidasyeezyslidepure from ".././images/Addidas/addidas yeezy slide pure.jpg";



import Footer from ".././components/footer.js";

function Addidas() {


    return (

        <body>

            <h1 class="jordanHeading">Available Addidas Shoes</h1>

            <hr />
            <div class="divider"></div>

            <div class="shoeContainer">
                <Showcase image={Addidastreyyoung1icetrae} text="Addidas Trey Young 1 Ice Trae" price="$160.00" sizes={["6", "7", "9.5"]} discount="$20.00"></Showcase>
                <Showcase image={Addidasyeezy450darkslate} text="Addidas Yeezy 450 Dark Slate" price="$305.00" sizes={["8", "9", "11", "12"]} discount="$40.00"></Showcase>
                <Showcase image={Addidasyeezy500claybrown} text="Addidas Yeezy 500 Clay Brown" price="$290.00" sizes={["9", "10", "13"]} discount=""></Showcase>
                <Showcase image={Addidasyeezyboost350v2light} text="Addidas Yeezy Boost 350 V2 Light" price="$310.00" sizes={["10", "10.5", "12"]} discount=""></Showcase>
                <Showcase image={Addidasyeezy350v2mxoat} text="Addidas Yeezy Boost 350 V2 MX Oat" price="$240.00" sizes={["7", "8", "9", "12"]} discount="$40.00"></Showcase>
                <Showcase image={Addidasyeezy700fadedazure} text="Addidas Yeezy Boost 700 Faded Azure" price="$255.00" sizes={["8", "9", "12"]} discount=""></Showcase>
                <Showcase image={Addidasyeezy700mnvnbluetint} text="Addidas Yeezy 700 MNVN Blue Tint" price="$260.00" sizes={["7", "10", "11"]} discount="$25.00"></Showcase>
                <Showcase image={Addidasyeezy700washorange} text="Addidas Yeezy 700 Wash Orange" price="$315.00" sizes={["7", "8", "10", "12"]} discount="$20.00"></Showcase>
                <Showcase image={Addidasyeezyslideglowgreen} text="Addidas Yeezy Slide Glow Green" price="$140.00" sizes={["9", "10"]} discount=""></Showcase>
                <Showcase image={Addidasyeezyslidepure} text="Addidas Yeezy Slide Pure" price="$200.00" sizes={["8", "10"]} discount="$30.00"></Showcase>
            </div>

            <Footer className="contactFooter"></Footer>

        </body>
    );
}

export default Addidas;