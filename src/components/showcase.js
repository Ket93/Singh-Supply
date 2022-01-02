import React, { useState, Component } from "react";
import "./showcase.css";

class Showcase extends Component {

    render() {

        const { image, text, price, sizes, discount } = this.props;


        if (discount === "") {

            return (
                <body class="body">
                    <div class="container">
                        <div className="noDiscountDivide"></div>
                        <img class="displayImage" src={image} alt="" />

                        {sizes.map(function (size) {
                            return <p class="size">{size}</p>;
                        })}

                        <h3 class="title">{text}</h3>
                        <p class="price">From {price} CAD</p>

                    </div>
                </body>
            )

        }

        else {

            const discountPrice = parseFloat(price.slice(1)) - parseFloat(discount.slice(1));

            return (
                <body class="body">
                    <div class="container">

                        <div className="discountContainer">
                            <p className="discountText">SAVE {discount}</p>
                        </div>

                        <img class="displayImage" src={image} alt="" />

                        {sizes.map(function (size) {
                            return <p class="size">{size}</p>;
                        })}

                        <h3 class="title">{text}</h3>
                        <div className="prices">
                            <p class="discountedPrice">From ${discountPrice}.00 CAD</p>
                            <p className="oldPrice">{price} CAD </p>
                        </div>

                    </div>
                </body>
            )
        }
    }
}

export default Showcase;