/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";


const HomePage = () => {


    return (
        <>
            <div className="homepageContainer">
                <h1 data-aos="fade-up-right" className="companyQuote">Connecting your business to the world</h1>
                <img data-aos="fade-left" className="homepageImg" src={process.env.PUBLIC_URL + "./assets/Background-homepage-img.jpg"} />
            </div>


        </>

    )
};

export default HomePage;