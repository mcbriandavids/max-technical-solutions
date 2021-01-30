import React from 'react';
import { Helmet } from 'react-helmet';
const Meta = ({ title, description, keyword }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keyword} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Welcome to Max Technical Solutions',
	keywords: 'Automation Machines ',
	description: 'We build, install and install automation machines'
};
export default Meta;
