import "./App.css";
import React from "react";
import "./asset/Fonts/Fonts.css";
import LandingPage from "./components/Pages/LandingPage";
import './asset/BasicStyles.css';

// importing color variables
import "./asset/variables/colorVariables.css";

// importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faTruck,
	faCheckToSlot,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
library.add(faTruck, faCheckToSlot, faStar);

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<LandingPage />
			</div>
		);
	}
}

export default App;
