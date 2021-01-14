import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Dissertation from './Components/Dissertation/Dissertation'
import Teaching from './Components/Teaching/Teaching'
import Resume from './Components/Resume/Resume'
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'


const App = () => {




	return (
		<BrowserRouter>
			<div className="AppWrapper">
				<div className="App">
					<Header/>
					<div className="GeneralMargin" />
					<div style={{ height: "100%" }}>
						<Route path="/home" component={Home}></Route>
						<Route path="/teaching" component={Teaching}></Route>
						<Route path="/dissertation" component={Dissertation}></Route>
						<Route path="/resume" component={Resume}></Route>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
					</div>
					<button className="TopButton fa fa-angle-up" onClick={() => (document.body.scrollTop = 0, document.documentElement.scrollTop = 0)}></button>
					<Footer />

				</div>
			</div>

		</BrowserRouter >
	);
}

export default App;
