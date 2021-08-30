import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const hamburgerMenu = ({ checkingStatus, settingStatus }) => {


    return (

        <div>
            <nav>
                <Link to="/"> <h1 className="companyTitle">ADG Communications</h1></Link>
                <div className="burgerMenu-Container" onClick={() => settingStatus(!checkingStatus)}>
                    <i className={checkingStatus.toString()}></i>
                    <i className={checkingStatus.toString()}></i>
                    <i className={checkingStatus.toString()}></i>
                </div>
            </nav>
            <ul className="nav-links-container" style={{ transform: checkingStatus ? "translateY(0%)" : null }}>
                <li className="nav-item">Home</li>
                <li className="nav-item">Support</li>
                <li className="nav-item">Contact</li>
            </ul>

        </div>

    )
};

export default hamburgerMenu;