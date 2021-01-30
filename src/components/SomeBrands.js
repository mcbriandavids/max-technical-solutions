import React from 'react';
import { Card } from 'react-bootstrap';

const SomeBrands = ({ brand }) => {
	return (
		<>
			<Card className='my-3 p-3 mx-4 rounded'>
				<Card.Img src={brand} variant='top' alt='Brand' />
			</Card>
		</>
	);
};

export default SomeBrands;
