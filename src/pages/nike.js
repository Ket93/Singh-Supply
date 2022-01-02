import "./nike.css";
import Showcase from ".././components/showcase.js"
import Nikeairforce1lowsupremewhite from ".././images/Nikes/nike air force 1 low supreme white.jpg";
import Nikedunkhighgameroyal from ".././images/Nikes/nike dunk high game royal.jpg";
import Nikedunkhighmoonfossil from ".././images/Nikes/nike dunk high moon fossil.jpg";
import Nikedunklowarcheopink from ".././images/Nikes/nike dunk low archeo pink.jpg";
import Nikedunklowchampionshipred from ".././images/Nikes/nike dunk low championship red.jpg";
import Nikedunklowembchicago from ".././images/Nikes/nike dunk low emb chicago.jpg";
import Nikedunklowgeorgetown from ".././images/Nikes/nike dunk low georgetown.jpg";
import Nikedunklowgreenglow from ".././images/Nikes/nike dunk low green glow.jpg";
import Nikedunklowmichigan from ".././images/Nikes/nike dunk low michigan.jpg";
import Nikedunklowretrowhiteblack from ".././images/Nikes/nike dunk low retro white black.jpg";
import Nikedunklowunc from ".././images/Nikes/nike dunk low unc.png";
import Nikelebron19tunesquad from ".././images/Nikes/nike lebron 19 tune squad.jpg";
import NikeSBdunklowproparraabstractart from ".././images/Nikes/nike SB dunk low pro parra abstract art.jpg";
import Footer from ".././components/footer.js";

function Nike() {


    return (

        <body>

            <h1 class="jordanHeading">Available Nike Shoes</h1>

            <hr />
            <div class="divider"></div>

            <div class="shoeContainer">
                <Showcase image={Nikeairforce1lowsupremewhite} text="Nike Air Force 1 Low Supreme White" price="$180.00" sizes={["6", "7", "9.5"]} discount=""></Showcase>
                <Showcase image={Nikedunklowarcheopink} text="Nike Dunk Low Archeo Pink" price="$250.00" sizes={["8", "9", "11", "12"]} discount="$40.00"></Showcase>
                <Showcase image={Nikedunklowchampionshipred} text="Nike Dunk Low Championship Red" price="$250.00" sizes={["9", "10", "13"]} discount="$20.00"></Showcase>
                <Showcase image={Nikedunklowembchicago} text="Nike Dunk Low EMB Chicago" price="$250.00" sizes={["10", "10.5", "12"]} discount=""></Showcase>
                <Showcase image={Nikedunklowgeorgetown} text="Nike Dunk Low Georgetown" price="$350.00" sizes={["7", "8", "9", "12"]} discount="$35.00"></Showcase>
                <Showcase image={Nikedunklowgreenglow} text="Nike Dunk Low Green Glow" price="$245.00" sizes={["8", "9", "12"]} discount=""></Showcase>
                <Showcase image={Nikedunklowmichigan} text="Nike Dunk Low Michigan" price="$295.00" sizes={["7", "10", "11"]} discount="$30.00"></Showcase>
                <Showcase image={Nikedunklowretrowhiteblack} text="Nike Dunk Low Retro White Black" price="$330.00" sizes={["7", "8", "10", "12"]} discount="$50.00"></Showcase>
                <Showcase image={Nikedunklowunc} text="Nike Dunk Low UNC" price="$420.00" sizes={["9", "10"]} discount=""></Showcase>
                <Showcase image={NikeSBdunklowproparraabstractart} text="Nike SB Dunk Low Parra Abstract Art" price="$400.00" sizes={["8", "10"]} discount="$30.00"></Showcase>
                <Showcase image={Nikedunkhighmoonfossil} text="Nike Dunk High Moon Fossil" price="$190.00" sizes={["6", "7", "13"]} discount="$45.00"></Showcase>
                <Showcase image={Nikedunkhighgameroyal} text="Nike Dunk High Game Royal" price="$220.00" sizes={["10", "11", "12"]} discount="$50.00"></Showcase>
                <Showcase image={Nikelebron19tunesquad} text="Nike Lebron 19 Tune Squad" price="$280.00" sizes={["8", "9", "10"]} discount="$25.00"></Showcase>
            </div>

            <Footer className="contactFooter"></Footer>

        </body>
    );
}

export default Nike;