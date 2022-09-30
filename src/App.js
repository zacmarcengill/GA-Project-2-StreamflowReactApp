import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';
import Results from './Results';

function App(event) {
	return (
		<div>
			<header className='header-container'>
				<Header />
				<SiteSelect value='' />
			</header>
			<body>
				<Results />
			</body>
		</div>
	);
}

export default App;
