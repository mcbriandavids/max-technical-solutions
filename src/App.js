import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import ProductsScreen from './screens/ProductsScreen';
import ProductsDetailsScreen from './screens/ProductsDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import './App.css';

import SuccessScreen from './screens/SuccessScreen';

const App = () => {
	return (
		<Router>
			<Navbar />
			<main className='py-3'>
				<Container>
					<Switch>
						<Route exact path='/' component={HomeScreen} />
						<Route exact path='/about' component={AboutScreen} />
						<Route exact path='/contact' component={ContactScreen} />
						<Route exact path='/products' component={ProductsScreen} />
						<Route exact path='/products/:slug/:id' component={ProductsDetailsScreen} />
						<Route exact path='/success' component={SuccessScreen} />
					</Switch>
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
