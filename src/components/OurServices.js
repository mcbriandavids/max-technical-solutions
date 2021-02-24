import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCloud, FaTools, FaBuilding } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';
import StyledButton from '../components/Button';
import '../styles/our-services.css';

export default class OurServices extends Component {
	state = {
		services: [
			{
				icon: <FaTools />,
				title: 'Training',
				details:
					'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam officia exercitationem ?'
			},
			{
				icon: <FaCloud />,
				title: 'Research',
				details:
					'We are into research, supply, maintenance and development of automation machines to match up with recent technology of the world.'
			},
			{
				icon: <FaBuilding />,
				title: 'Development',
				details:
					'    We also offer automation / technical services for construction and oil and gas drilling rigs and platforms.'
			}
		]
	};
	render() {
		return (
			<Container>
				<Title title='Our Services' />
				<Row>
					{this.state.services.map((service, id) => {
						return (
							<Col key={id} md={6} xl={4} className='text-center py-3 col-services'>
								<article key={id} className='service '>
									<span className='icon '>{service.icon}</span>
									<h3>{service.title}</h3>
									<p className='text-justify '>{service.details}</p>
								</article>
								<StyledButton>
									<Link to={`/services/${service.title}`} className='text-decoration-none'>
										Read more...
									</Link>
								</StyledButton>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}
