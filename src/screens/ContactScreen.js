import React from 'react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
							<form name='contact' action='/contact' method='post'>
								<input type='hidden' name='form-name' value='contact' />
								<div className='mt-2'>
									<label htmlFor='FullName'>First Name</label>
									<input
										required
										type='text'
										placeholder='Full Name'
										name='FullName'
										className='w-100 py-2'
										fluid
									/>
								</div>
								<div className='mt-2'>
									{' '}
									<label htmlFor='Email'>Email</label>
									<input
										required
										type='text '
										placeholder='Email'
										name='Email'
										className='w-100 py-2'
									/>
								</div>
								<div className='mt-2'>
									<label htmlFor='PhoneNumber'>Phone Number</label>
									<input
										required
										type='number'
										placeholder='Phone Number'
										name='PhoneNumber'
										className='w-100 py-2'
									/>
								</div>
								<div className='mt-2'>
									<label htmlFor='Message'>Message</label>
									<textarea
										required
										placeholder='Message'
										name='Message'
										className='w-100 py-2'></textarea>
								</div>
								<div>
									<button type='submit' className='btn-dark submit-contact w-100 py-2'>
										Submit
									</button>
								</div>
							</form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ContactScreen;
