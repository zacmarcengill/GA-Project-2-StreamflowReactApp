import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';
import Results from './Results';

function App() {
	const [site, setSite] = useState('');
	console.log(site);

	return (
		<>
			<header className='header-container'>
				<Header />
				<SiteSelect />
			</header>
			<div>
				<Results />
			</div>
		</>
	);
}

export default App;
