import React from 'react';

const ContactHero = ({ children, contact }) => {
	return <header className={contact}> {children}</header>;
};

ContactHero.defaultProps = {
	contact: 'defaultContactHero'
};
export default ContactHero;
