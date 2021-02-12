import React from 'react';

const Footer = () => {
	return (
		<div className=' footer text-center text-capitalize bg-light p-2  '>
			<p className='footer-text py-2'>max technical solutions &copy; 2021</p>
			<div className='text-right'>
				{' '}
				<span className='mr-3 text-secondary text-capitalize'>
					Designed & built: <strong>BrianMartinez Tech</strong>{' '}
				</span>
			</div>
		</div>
	);
};

export default Footer;
