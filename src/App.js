import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Dissertation from './Components/Dissertation/Dissertation'
import Teaching from './Components/Teaching/Teaching'

const App = () => {
	const [pageState,setPageState] = useState({page:"home"})
	let MainContent
	if(pageState.page  === "home"){
		MainContent = (<Home/>)
	}
	else if(pageState.page  === "diss"){
		MainContent = (<Dissertation/>)
	}
	else if(pageState.page  === "teaching"){
		MainContent = (<Teaching/>)
	}



	else{
		MainContent = (<p>{pageState.page}</p>)
	}

	



	return (
		<div className="App">
			<Header changeState = {setPageState}/>
			<div className="GeneralMargin"/>
			{MainContent}
			<Footer />
		</div>
	);
}

export default App;
