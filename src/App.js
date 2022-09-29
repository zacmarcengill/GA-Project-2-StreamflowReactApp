import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';

function App(event) {
	return (
		<header className='header-container'>
			<Header />
			<SiteSelect value='' />
		</header>
	);
}

export default App;
