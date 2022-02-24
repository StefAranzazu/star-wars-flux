import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import  CharacterDetails  from "./views/singleCharacter.jsx";
import  PlanetsDetails  from "./views/singlePlanet.jsx";
import injectContext from "./store/appContext";
import  Navbar from "./component/navbar.jsx";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
		
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/chardetails/:thename" component={CharacterDetails} />
						<Route exact path="/pladetails/:thename" component={PlanetsDetails} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				
		
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
