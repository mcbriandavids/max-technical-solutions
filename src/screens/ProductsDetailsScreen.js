import React from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import Title from '../components/Title';
import uuid from 'react-uuid';

const ProductsDetailsScreen = (props) => {
	const slug = props.match.params.slug;
	const id = uuid();
	return (
		<Container>
			<ProductConsumer>
				{(value) => {
					const { getSingleProduct, addInfo } = value;

					const product = getSingleProduct(slug);
					if (!product) {
						return (
							<div>
								<h3 className='text-capitalize'>no such product could be found</h3>
								<Link to='/products' className='btn btn-dark mb-5'>
									Go to products{' '}
								</Link>
							</div>
						);
					}
					const { name, description, images } = product;
					return (
						<Container>
							<Link to='/products' className='btn btn-dark mb-5'>
								Go to products{' '}
							</Link>
							<Row>
								<Col md={6}>
									<Image src={images[0]} alt={name} fluid width='400' className='mx-3' />
								</Col>
								<Col md={6}>
									{' '}
									<ListGroup variant='flush'>
										<ListGroup.Item>
											<h2>Product Name:{name}</h2>
										</ListGroup.Item>

										<ListGroup.Item>
											<p className='text-capitalize'>
												{' '}
												<strong>About:</strong> {description}
											</p>
										</ListGroup.Item>
									</ListGroup>
									<Title title='You may also like' />
									<Col md={12} className='add-info d-flex mt-3'>
										{addInfo.map((image, index) => (
											<Image
												src={image.images[0]}
												variant='top'
												className='w-25 px-2'
												fluid
												key={index}
											/>
										))}
									</Col>
								</Col>
							</Row>
						</Container>
					);
				}}
			</ProductConsumer>
		</Container>
	);
};

export default ProductsDetailsScreen;
