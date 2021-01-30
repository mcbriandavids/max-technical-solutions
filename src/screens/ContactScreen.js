import React from 'react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Banner from '../components/Banner';
import ContactHero from '../components/ContactHero';

const ContactScreen = () => {
	return (
		<Container>
			<ContactHero>
				<Banner title='CONTACT US'></Banner>
			</ContactHero>
			<Row className='mt-4'>
				<Col md={6} className='text-center'>
					<Card>
						<Card.Body>
							<Card.Title as='div'>
								<h3>How to find Us</h3>
							</Card.Title>
							<span> Please feel free to contact as follows;</span>
							<h5>
								33 Pa Josiah Street,
								<br />
								House 24 Herman,
								<br /> off Jakpa Road,
								<br /> Effurun-Warri,
								<br />
								Delta State
							</h5>
							<FaPhone /> : +234 8033417722
							<br />
							<FaMailBulk /> : malcolmchukz@gmail.com
							<br />
							<hr />
							<h3>Hours of Business</h3>
							<br />
							<h5> Monday 08:30–16:00 </h5>
							<br /> <h5>Tuesday 08:30–16:00</h5> <br />
							<h5>Wednesday 08:30–16:00</h5>
							<br />
							<h5>Thursday 08:30–16:00</h5>
							<br />
							<h5>Friday 08:30–13:00</h5>
							<br />
							<h5>Saturday Closed</h5>
							<br />
							<h5>Sunday Closed</h5>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}>
					<Card>
						<Card.Body>
							<h3 className='text-center '>Get in Touch</h3>
							<Form name='contact' action='/contact' method='post'>
								<input type='hidden' name='form-name' value='contact' />
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Name</Form.Label>
									<Form.Control required type='text' name='Name' placeholder='Enter Full Name' />
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										required
										type='email'
										name='Email address'
										placeholder='name@example.com'
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlInput1'>
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										required
										type='number'
										name='Phone Number'
										placeholder='Phone Number'
									/>
								</Form.Group>

								<Form.Group controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Message</Form.Label>
									<Form.Control required as='textarea' name='Message' />
								</Form.Group>
								<Button type='submit' className='btn'>
									Send
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactScreen;
<form name='contact' action='/contact' method='post' className='join-form'>
	<input type='hidden' name='form-name' value='contact' />
	<label htmlFor='FirstName'>First Name</label>
	<input type='text' required name='FirstName' placeholder='Your First Name' />
	<label htmlFor='LastName'>Last Name</label>
	<input type='text' required name='LastName' placeholder='Your Last Name' />
	<label htmlFor='Email'>Email</label>
	<input type='text' required name='Email' placeholder='Your Email' />
	<label htmlFor='PhoneNumber'>Phone Number</label>
	<input type='number' required name='Email' placeholder='Your Phone Number' />
	<button type='submit' className='btn-primary submit-btn'>
		Submit
	</button>
</form>;
