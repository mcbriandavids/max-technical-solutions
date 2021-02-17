import React, { useContext } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context';
import uuid from 'react-uuid';
import Loader from './Loader';

const YouMayAlsoLike = () => {
	const { addInfo, loading } = useContext(ProductContext);

	const id = uuid();

	return (
		<Row>
			<Col md={12} className='add-info d-flex mt-3'>
				{addInfo.map((item, index) =>
					loading ? (
						<Loader />
					) : (
						<Link to={`/products/${item.slug}/${id}`} key={index}>
							<Image
								key={index}
								src={item.images[0]}
								alt={item.name}
								w-100='true'
								className='px-2'
								fluid
							/>
						</Link>
					)
				)}
			</Col>
		</Row>
	);
};

export default YouMayAlsoLike;
