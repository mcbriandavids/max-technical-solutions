import React, { Component } from 'react';
import { ProductContext } from '../Context';
import { Row, Col } from 'react-bootstrap';
import Loader from './Loader';
import ProductDetails from './ProductDetails';
import Title from './Title';
import SomeBrands from './SomeBrands';
import OurServices from './OurServices';

export default class FeaturedProducts extends Component {
	static contextType = ProductContext;
	render() {
		let value = this.context;
		const { featuredProducts: products, someBrands: brands, loading } = value;

		return (
			<>
				<section>
					<Title title='Products Categories' />
					{loading ? (
						<Loader />
					) : (
						<Row>
							{products.map((product, id) => (
								<Col key={id} sm={12} md={6} xl={3}>
									<ProductDetails product={product} />
								</Col>
							))}
						</Row>
					)}
				</section>

				<section>
					<Title title='Some of Our Brands' />
					{loading ? (
						<Loader />
					) : (
						<Row>
							{brands.map((brand, id) => (
								<Col sm={12} md={6} xl={3} key={id}>
									<SomeBrands brand={brand.images} />
								</Col>
							))}
						</Row>
					)}
				</section>

				<section>
					<OurServices />
				</section>
			</>
		);
	}
}
