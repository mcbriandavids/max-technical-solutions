import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { ProductContext } from '../Context';

export default class ProductDetailsScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slug: this.props.match.params.slug
		};
	}
	static contextType = ProductContext;

	render() {
		const { getSingleProduct } = this.context;

		const product = getSingleProduct(this.state.slug);
		if (!product) {
			return (
				<div>
					<h3 className='text-capitalize'>no such product could be found</h3>
					<Link to='/product' className='btn-light text-decoration-none'>
						back to product
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
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Product Name:{product.name}</h2>
							</ListGroup.Item>

							<ListGroup.Item>
								<p className='text-capitalize'>
									{' '}
									<strong>About:</strong> {description}
								</p>
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}
