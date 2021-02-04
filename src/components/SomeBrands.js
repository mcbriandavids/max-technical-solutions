import React, { useRef, useEffect } from 'react';
import { TweenMax, Power4 } from 'gsap';
import { Card } from 'react-bootstrap';

const SomeBrands = ({ brand }) => {
	let brands = useRef(null);
	useEffect(() => {
		TweenMax.to(brands, 0.9, {
			y: -10,
			ease: Power4.easeOut
		});
	}, []);

	return (
		<>
			<Card className='my-3 p-3 mx-4 rounded'>
				<Card.Img src={brand} w-50='true' variant='top' alt='Brand' ref={(el) => (brands = el)} />
			</Card>
		</>
	);
};

export default SomeBrands;
