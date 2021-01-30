import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

const ProductDetails = ({ product }) => {
	const { images, slug, name } = product;
	const id = uuid();

	return (
		<>
			<Card className='my-3 p-3 mx-4 ' rounded='true'>
				<Link to={`/products/${slug}/${id}`}>
					<Card.Img src={images[0]} variant='top' />
				</Link>
				<Card.Body>
					<Card.Title as='div' className='text-center text-capitalize'>
						<Link to={`/products/${slug}/${id}`} className='text-decoration-none'>
							<strong className='text-dark'>{name}</strong>
						</Link>
					</Card.Title>
				</Card.Body>
			</Card>
		</>
	);
};

ProductDetails.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		slug: PropTypes.string.isRequired,
		images: PropTypes.arrayOf(PropTypes.string).isRequired
	})
};
export default ProductDetails;
