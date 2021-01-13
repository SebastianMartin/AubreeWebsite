import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Dissertation from './Components/Dissertation/Dissertation'
const App = () => {
	const [pageState,setPageState] = useState({page:"home"})
	let MainContent
	if(pageState.page  === "home"){
		MainContent = (<Home/>)
	}
	else if(pageState.page  === "diss"){
		MainContent = (<Dissertation/>)
	}


	else{
		MainContent = (<p>{pageState.page}</p>)
	}

	



	return (
		<div className="App">
			<Header changeState = {setPageState}/>
			{MainContent}
			<Footer />
		</div>
	);
}

export default App;
