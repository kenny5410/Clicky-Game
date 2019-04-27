//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Car Clicky Game!</h1>
		<h2>Don't click the same card more than once.</h2>
	</header>
);

export default Jumbotron;