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
		name: 'CANEY FORK AT STONEWALL',
		latitude: '36.1861111',
		longitude: '-85.9044444',
		streamflow: '1380',
		unitCode: 'ft3/s',
		variableDescription: 'Discharge, cubic feet per second',
		dateTime: '2022-10-05T17:30:00.000-05:00',
	};

	const [site, setSite] = useState(initialState);

	return (
		<div>
			<Map site={site} setSite={setSite} />
		</div>
	);
}

export default App;
