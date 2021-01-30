import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from './Title';
import uuid from 'react-uuid';

const ProductsList = ({ products }) => {
	console.log(products);
	const id = uuid();
	return (
		<Container>
			<Title title='Our Products' />
			<Row>
				{products.map((product, index) => (
					<Col sm={12} md={6} xl={4} key={index}>
						<Card className='my-3 p-3 mx-4  ' rounded='true'>
							<Link to={`/products/${product.slug}/${id}`}>
								{' '}
								<Card.Img src={product.images[0]} alt={product.name} />
							</Link>
							<Card.Body className='text-center'>
								<Card.Title>
									<p>{product.name}</p>
									<Link
										to={`/products/${product.slug}/${id}`}
										className='text-decoration-none text-dark'>
										<span> View Details</span>
									</Link>
								</Card.Title>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ProductsList;
