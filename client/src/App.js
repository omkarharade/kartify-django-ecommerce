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
	faBars
} from "@fortawesome/free-solid-svg-icons";
library.add(faTruck, faCheckToSlot, faStar, faBars);

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
