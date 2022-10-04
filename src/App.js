import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';
import Results from './Results';
import { useState } from 'react';

function App() {
	const [site, setSite] = useState('');
	console.log(site);

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	getSite(searchSite);
	// }

	// function getSite(searchSite) {
	// 	const searchOptions =
	// }

	return (
		<>
			<header className='header-container'>
				<Header />
				<SiteSelect  />
			</header>
			<div>
				<Results siteInfo={site}/>
			</div>
		</>
	);
}

export default App;
