import React, { Component } from 'react';
import { FaCloud, FaTools, FaBuilding } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import Title from './Title';

export default class OurServices extends Component {
	state = {
		services: [
			{
				icon: <FaBuilding />,
				title: 'Development',
				details:
					'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam officia exercitationem quas voluptates tenetur commodi totam inventore a nulla dolorem maiores possimus, distinctio ipsam cumque voluptatum veniam eius doloribus?'
			},
			{
				icon: <FaTools />,
				title: 'Training',
				details:
					'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam officia exercitationem quas voluptates tenetur commodi totam inventore a nulla dolorem maiores possimus, distinctio ipsam cumque voluptatum veniam eius doloribus?'
			},
			{
				icon: <FaCloud />,
				title: 'Research',
				details:
					'     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quam officia exercitationem quas voluptates tenetur commodi totam inventore a nulla dolorem maiores possimus, distinctio ipsam cumque voluptatum veniam eius doloribus?'
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
							<Col key={id} md={6} xl={4} className='text-center py-3'>
								<article key={id} className='service'>
									<p className='icon'>{service.icon}</p>
									<h3>{service.title}</h3>
									<p className='text-justify'>{service.details}</p>
								</article>
							</Col>
						);
					})}
				</Row>
			</Container>
		);
	}
}
