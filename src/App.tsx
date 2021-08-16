//codes in this project not refactored for educational purposes

import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import LoginPage from './Components/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import './GlobalStyles.css';
import { myContext } from './Context';

function App() {
	const userObject = useContext(myContext);
	console.log('app, userObject', userObject);
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route path="/" exact component={Homepage} />
				{userObject ? null : <Route path="/login" component={LoginPage} />}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
