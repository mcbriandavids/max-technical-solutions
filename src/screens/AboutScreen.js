import React, { useEffect, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import rightImage from '../assets/img6.jpg';
import leftImageThree from '../assets/img1.jpg';
import leftImageTwo from '../assets/img7.jpg';
import '../styles/about.css';
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
								<Card.Title as='h3' className='text-center'>
									About us
								</Card.Title>
								<Card.Text className='text-justify'>
									We are team of technical providers that are poised to bringing automation,
									electrical and electronics technical abilities to clients to help solve day to day
									challenges in our homes, offices and technical work areas. Our experienced and
									qualified technical team has successfully designed and implemented electrical
									electronics and automation solutions for various clients resulting in increased
									productivity.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Img src={rightImage} alt='about-us' rounded='true' className='img' />
						</Card>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col md={6}>
						<Card>
							<Card.Img src={leftImageTwo} alt='mission' rounded='true' className='img' />
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Body className='my-5'>
								<Card.Title as='h3' className='text-center'>
									Our Mission
								</Card.Title>
								<Card.Text className='text-justify'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis
									accusantium minima, magnam, illo optio dolor facere vero asperiores obcaecati iste
									praesentium consectetur saepe corporis, est impedit? Modi facilis aspernatur
									deleniti iure doloribus earum ducimus officia, temporibus exercitationem hic unde
									perspiciatis optio esse velit quo ipsum! Similique molestiae debitis odio.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row className='mt-4'>
					<Col md={6}>
						<Card>
							<Card.Body className='my-5'>
								<Card.Title as='h3' className='text-center text-justify'>
									Worker
								</Card.Title>
								<Card.Text className='text-justify'>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis
									accusantium minima, magnam, illo optio dolor facere vero asperiores obcaecati iste
									praesentium consectetur saepe corporis, est impedit? Modi facilis aspernatur
									deleniti iure doloribus earum ducimus officia, temporibus exercitationem hic unde
									perspiciatis optio esse velit quo ipsum! Similique molestiae debitis odio.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6}>
						<Card>
							<Card.Img src={leftImageThree} alt='mission' rounded='true' className='img' />
						</Card>
					</Col>
				</Row>
			</Component>
		</>
	);
};

export default AboutScreen;
