import React from "react";
import "./index.css";
import shetech from "../../images/shetech.png";
import bitrock from "../../images/bitrock.png";

const Header = () => (
	<div className="header">
		<div className="img-wrapper"><img src={shetech} alt="SheTech" height="80"/></div>
		<h1>We <span className="heart">&#10084;</span> React</h1>
		<div className="img-wrapper"><img src={bitrock} alt="BitRock" height="40"/></div>
	</div>
);

export default Header;
