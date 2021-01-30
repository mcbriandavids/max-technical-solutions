import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { ProductConsumer } from '../Context';
import uuid from 'react-uuid';

const ProductCarousel = () => {
	const id = uuid();
	return (
		<ProductConsumer>
			{(value) => {
				const { featuredProducts } = value;
				return (
					<Carousel pause='hover' className='bg-dark'>
						{featuredProducts.map((product, index) => (
							<Carousel.Item key={index} className='text-center'>
								<Link to={`/products/${product.slug}/${id}`}>
									<Carousel.Caption className='carousel-caption'>
										<h2>{product.name}</h2>
									</Carousel.Caption>
									<Image src={product.images[0]} alt={product.name} fluid />
								</Link>
							</Carousel.Item>
						))}
					</Carousel>
				);
			}}
		</ProductConsumer>
	);
};

export default ProductCarousel;
