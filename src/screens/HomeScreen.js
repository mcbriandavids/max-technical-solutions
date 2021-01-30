import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
	return (
		<>
			<Meta />
			<ProductCarousel />
			<FeaturedProducts />
		</>
	);
};

export default HomeScreen;
