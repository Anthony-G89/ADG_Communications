import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const hamburgerMenu = ({ checkingStatus, settingStatus, closeMenu }) => {


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
                <Link to="/"> <li className="nav-item" onClick={closeMenu}>Home</li></Link>
                <Link to="/projects"> <li className="nav-item" onClick={closeMenu}>Projects</li></Link>
                <Link to="/contact" onClick={closeMenu}> <li className="nav-item">Contact</li></Link>
            </ul>

        </div>

    )
};

export default hamburgerMenu;