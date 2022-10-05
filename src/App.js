import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';
import Map from './Map';
import Data from './Data';
import About from './About';

function App() {
	const initialState = {
		code: '03424860',
		name: '',
		latitude: '',
		longitude: '',
		streamflow: '',
		unitCode: '',
		variableDescription: '',
		dateTime: '',
	};

	const [site, setSite] = useState(initialState);

	return (
		<div>
			<Map site={site} setSite={setSite} />
		</div>
	);
}

export default App;
