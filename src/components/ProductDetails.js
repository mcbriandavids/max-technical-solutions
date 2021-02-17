import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import StyledButton from './Button';

const ProductDetails = ({ product }) => {
	const { images, slug, name, loading } = product;
	const id = uuid();

	return (
		<>
			<Card className='my-3 p-3 mx-4 ' rounded='true'>
				{loading ? (
					<Loader />
				) : (
					<Link to={`/products/${slug}/${id}`}>
						<Card.Img src={images[0]} variant='top' />
					</Link>
				)}
				<Card.Body>
					<Card.Title as='div' className='text-center text-capitalize'>
						<StyledButton>
							<Link
								to={`/products/${slug}/${id}`}
								className='text-decoration-none  text-center text-dark'>
								<strong className='text-dark '>{name}</strong>
							</Link>
						</StyledButton>
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
