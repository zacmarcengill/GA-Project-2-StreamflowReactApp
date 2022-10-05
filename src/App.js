import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';
import Map from './Map';
import Data from './Data';

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
		<>
			<header className='header-container'>
				<Header />
				<SiteSelect site={site} setSite={setSite} />
			</header>
			<div>
				<Map site={site} />
				<Data site={site} />
			</div>
		</>
	);
}

export default App;
