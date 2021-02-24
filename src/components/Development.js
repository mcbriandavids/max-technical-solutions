import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import Title from './Title';
import img1 from '../assets/img4.jpg';
import img2 from '../assets/img8.jpg';
import img3 from '../assets/organogram.jpg';
import '../styles/development.css';
const Development = () => {
	return (
		<Container>
			<Title title='Development of Automation Machines' />

			<Row>
				<Col md={6}>
					<Card className='mt-5 text-center'>
						<Card.Body>
							<Card.Title>
								{' '}
								We offer automation / technical services for construction and oil and gas drilling rigs
								and platforms.
							</Card.Title>
							<Card.Text>They include but not limited to the following;</Card.Text>
						</Card.Body>
					</Card>

					<Card>
						<Card.Body className='development'>
							<Card.Text className=' development-text '>
								1. Instruments sensors & oilfield valves maintenance and fixing. <br />
								2. Efficient in Instruments sensor / signal calibrations. <br />
								3. Efficient in cable tray running, tracing, terminations and testing in different field
								locations.
								<br />
								4. Efficient in Pneumatic motors,equipments maintenance and repairs. <br />
								5. Efficient in Electrical / Instrumentation oilfield construction. <br />
								6. Electronic / electronic circuit design (troubleshoots / fault finding and fixing).
							</Card.Text>
						</Card.Body>
						<Card.Img src={img2} alt={'image'} />
					</Card>
				</Col>
				<Col md={6}>
					<Card className='my-5'>
						<Card.Img src={img1} alt={'image'} className='img1' />
					</Card>
				</Col>
			</Row>
			<Card>
				<Card.Body>
					<Card.Title as='h4' className='text-center'>
						RECENT PROJECT
					</Card.Title>
					<Card.Text>
						Max Auto-Fluid level controller, is a home, office and industrial used controller fitted with
						fluid proof sensor that monitors your fluid reservoirs.
					</Card.Text>
					<Card.Title className='text-center'>ADDED ADVANTAGE OF OUR FLUID LEVEL CONTROLLER.</Card.Title>
					<Card.Text className='p-4'>
						1. Give the user visual display of the rising and decrease of the fluid in the tank or
						reservoir. <br />
						2. Fitted with Auto-surge controller to save the life span of your machine. 3. Includes Water /
						fluid proof non-water contact sensor. <br />
						4. This controller gives the user the room to set your level desired watch to a desired level.
						<br />
						5. This controller Auto-pumps your tank / reservoir when low at a desired calibrated level, and
						Auto cuts-off your machine when filled. 6. Comprises of a real-time voltage display to monitor
						used voltage. <br />
						7. Has a 4 seconds alarm notification system to notify the user when the tank / reservoir is
						filled. <br />
						8. Saves your tank / reservoir from rust and fluids spillage.
						<br />
						9. This is Automated as it eliminates switching on and off at difficult times.
					</Card.Text>
				</Card.Body>
			</Card>
			<Row>
				<Col>
					<Card>
						<Card.Title className='text-center mt-5'>BLOCK DIAGRAM OF THIS SYSTEM</Card.Title>
						<Card.Img src={img3} alt={'Image'} className='p-4 ' />
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Development;
