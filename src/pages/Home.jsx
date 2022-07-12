import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="background" onClick={() => navigate("/test")}>
                <h1> Dogs exercice</h1>
                <h3>GO</h3>
            </div>
        </div>
    );
}

export default Home;
