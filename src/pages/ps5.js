import "./ps5.css";
import Ps5Pic from ".././images/ps5.PNG";

function Ps5() {

    return (



        <body>

            <h1 className="ps5Heading">Available PS5s</h1>

            <hr />


            <div class="divider"></div>

            <div className="ps5Container">
                <img class="ps5Pic" src={Ps5Pic} alt="" />

                <div className="ps5DescriptionContainer">
                    <h2 class="ps5Quantity">Quantity Available: </h2>
                    <h2 class="ps5Price">Starting Price: </h2>
                </div>
            </div>

        </body>
    );
}

export default Ps5;