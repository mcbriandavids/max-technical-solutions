import React, { useRef, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Title from './Title';
import uuid from 'react-uuid';
import { gsap } from 'gsap';

const ProductsList = ({ children, wrapperElement = 'div', direction = null, delay = 0, products }) => {
	const id = uuid();
	const Component = wrapperElement;
	let compRef = useRef(null);
	const distance = 400;
	let fadeDirection;
	switch (direction) {
		case 'left':
			fadeDirection = { x: -distance };
			break;
		case 'right':
			fadeDirection = { x: distance };
			break;
		case 'up':
			fadeDirection = { y: distance };
			break;
		case 'down':
			fadeDirection = { y: -distance };
			break;
		default:
			fadeDirection = { x: 0 };
	}
	useEffect(() => {
		gsap.from(compRef.current, 1, {
			...fadeDirection,
			opacity: 0,
			delay: 1
		});
	}, [compRef, fadeDirection, delay]);
	return (
		<div>
			<Title title='Our Products' />
			<Component ref={compRef}>
				<Container>
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
			</Component>
		</div>
	);
};

export default ProductsList;
