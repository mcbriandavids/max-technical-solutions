import React, { useContext } from 'react';
import { ProductContext } from '../Context';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Title from './Title';

const Research = () => {
	let { products } = useContext(ProductContext);
	let img = products.map((items) => items.images[0]);
	return (
		<Container>
			<Title title='Research, Supply and Maintenance of Automation Machines' className='text-center' />
			<Row>
				<Col md={7}>
					<Card className='mt-5'>
						<Card.Body>
							<Card.Title as='h4' className='text-center'>
								We offer the following services:
							</Card.Title>
							<Card.Text className='py-4'>
								1. We supply and maintenance of all kinds of flow / pressure valves.
								<br />
								2. Sensors calibration and maintenance.
								<br />
								3. Fluid level controllers for home tanks and industrial fluid reservoirs.
								<br />
								4. Automatic digital display board of any kind.
								<br />
								5. Automation on power changeover systems.
								<br />
								6. Design and construction of robotic systems.
								<br />
								7. Automation of industrial machines.
								<br />
								8. Design and construction of intelligent systems.
								<br />
								9. Auto-moving message display.
								<br />
								10. Inverter construction and installation.
								<br />
								11. Solar panel installations.
								<br />
								12. Automated gate opener using remote system.
								<br />
								13. Smart hand sanitizer / hand washing systems.
								<br />
								14. Home, offices and industrial security systems.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={5}>
					<Card className='mt-5'>
						<Card.Img src={img[2]} />
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md={6}>
					<Card className='mt-5'>
						<Card.Body>
							<Card.Title as='h4' className='text-center'>
								Picture of Supply Activity Here
							</Card.Title>
							<Card.Img src={img[0]} />
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card className='mt-5'>
						<Card.Body>
							<Card.Title as='h4' className='text-center'>
								Text on Supply made
							</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque porro saepe,
								voluptates ad assumenda ullam quidem esse molestias et.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Research;
