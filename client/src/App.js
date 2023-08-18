import "./App.css";
import React from "react";
import "./asset/Fonts/Fonts.css";
import LandingPage from "./components/Pages/LandingPage";
import './asset/BasicStyles.css';
import MenuPage from "./components/Pages/MenuPage"
import {Route, Routes} from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

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
				<Routes>
					<Route path="/*" element={<LandingPage />} />
                	<Route path="/signup/*" element={<Signup />} />
					<Route path="/login/*" element={<Login />} />
					<Route path="/menu/*" element={<MenuPage />} />
				</Routes>
			</div>
		);
	}
}

export default App;
