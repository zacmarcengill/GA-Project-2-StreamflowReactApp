import React from 'react';
import Header from './Header';

function About(props) {
	return (
		<div>
			<Header />
			<h2>
				This app was created by Zac Marcengill as Project #2 for General
				Assembly Software Engineering Bootcamp. Developed in React with Mapbox
				integration, this app uses data from USGS (U.S. Geological Survey) web
				resources API that provides up-to-date river data.
			</h2>
		</div>
	);
}

export default About;
