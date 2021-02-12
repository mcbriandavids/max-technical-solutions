import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';

const ProductsScreen = () => {
	const { sortedProducts, loading } = useContext(ProductContext);

	return <>{loading ? <Loader /> : <ProductsList products={sortedProducts} />}</>;
};

export default ProductsScreen;
