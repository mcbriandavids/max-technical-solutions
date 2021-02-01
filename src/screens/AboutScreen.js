import React, { useEffect, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import rightImage from '../assets/automation.jpg';
import leftImage from '../assets/left.jpg';
import leftImageTwo from '../assets/left-two.jpg';
import { gsap } from 'gsap';

const AboutScreen = ({ children, wrapperElement = 'div', direction = null, delay = 0 }) => {
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
		<>
			<Hero>
				<Banner title='LEARN ABOUT MAX TECHNICAL SOLUTIONS'></Banner>
			</Hero>
			<Component ref={compRef}>
				<Row className='mt-4'>
					<Col md={6}>
						<Card>
							<Card.Body className='my-5'>
								<Card.Title className='text-center'>
									<h3>About us</h3>
								</Card.Title>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis
									accusantium minima, magnam, illo optio dolor facere vero asperiores obcaecati iste
									praesentium consectetur saepe corporis, est impedit? Modi facilis aspernatur
									deleniti iure doloribus earum ducimus officia, temporibus exercitationem hic unde
									perspiciatis optio esse velit quo ipsum! Similique molestiae debitis odio.
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Img src={rightImage} alt='about-us' rounded='true' />
						</Card>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col md={6}>
						<Card>
							<Card.Img src={leftImage} alt='mission' rounded='true' />
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Body className='my-5'>
								<Card.Title className='text-center'>
									<h3>Our Mission</h3>
								</Card.Title>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis
									accusantium minima, magnam, illo optio dolor facere vero asperiores obcaecati iste
									praesentium consectetur saepe corporis, est impedit? Modi facilis aspernatur
									deleniti iure doloribus earum ducimus officia, temporibus exercitationem hic unde
									perspiciatis optio esse velit quo ipsum! Similique molestiae debitis odio.
								</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col md={6}>
						<Card>
							<Card.Body className='my-5'>
								<Card.Title className='text-center'>
									<h3>Worker</h3>
								</Card.Title>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis
									accusantium minima, magnam, illo optio dolor facere vero asperiores obcaecati iste
									praesentium consectetur saepe corporis, est impedit? Modi facilis aspernatur
									deleniti iure doloribus earum ducimus officia, temporibus exercitationem hic unde
									perspiciatis optio esse velit quo ipsum! Similique molestiae debitis odio.
								</p>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Img src={leftImageTwo} alt='mission' rounded='true' />
						</Card>
					</Col>
				</Row>
			</Component>
		</>
	);
};

export default AboutScreen;
