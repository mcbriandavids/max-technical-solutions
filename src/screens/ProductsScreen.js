import React from 'react';
import { ProductConsumer } from '../Context';
import ProductsList from '../components/ProductsList';
import Loader from '../components/Loader';

const ProductsScreen = () => {
	return (
		<ProductConsumer>
			{(value) => {
				const { sortedProducts, loading } = value;
				if (loading) {
					return <Loader />;
				}
				return (
					<>
						<ProductsList products={sortedProducts} />
					</>
				);
			}}
		</ProductConsumer>
	);
};

export default ProductsScreen;
