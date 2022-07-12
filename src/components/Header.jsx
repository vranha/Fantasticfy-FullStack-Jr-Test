import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="container__header" onClick={() => navigate("/home")}>
            <h2>Oriol Arias Test</h2>
            <img src="https://d33wubrfki0l68.cloudfront.net/63a4cf9588c213fba13882eac8d529fdd787c6ee/dc2f5/assets/images/logo/logo-fantasticfy_white.webp" alt="" />
        </div>
    );
}

export default Header;
