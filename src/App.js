import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SiteSelect from './SiteSelect';

function App() {
	return (
		<header class='header-container'>
			<Header />
			<SiteSelect value='' />
		</header>
	);
}

export default App;
