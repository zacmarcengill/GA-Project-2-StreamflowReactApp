import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';
import Map from './Map';
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
				<Map />
			</div>
			<div>
				<img
					src='https://media.defense.gov/2021/Jun/15/2002742197/-1/-1/0/210408-A-EO110-1050.JPG'
					alt='' id='site-img'
				/>
				<Results />
			</div>
		</>
	);
}

export default App;
