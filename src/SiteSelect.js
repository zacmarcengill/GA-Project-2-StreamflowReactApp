import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
// import App from './App';

function SiteSelect({ handleChange }) {
	const [site, setSite] = useState('');
	console.log(site);

	function handleChange(event) {
		setSite(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getSite(siteCode); 
	}

	function (siteCode) {
		const urlString = {

		} 

		const url = 

		fetch(url)
  			.then(res => {
    		return res.json();
  		})
  			.then(res => {
    		console.log("success!", res);
  		})
  			.catch(err => {
    		console.log("something went wrong...", err);
  		});
	}

	// data return, use setSite???

	return (
		<form onSubmit={handleChange} className='form-container'>
			<label htmlFor='site-select'>
				Choose Location:
				<select name='site-select' id='site-select'>
					<option value='03424860'>CANEY FORK AT STONEWALL</option>
					<option value='03582000'>ELK RIVER ABOVE FAYETTEVILLE, TN</option>
					<option value='03596000'>DUCK RIVER BELOW MANCHESTER, TN</option>
				</select>
			</label>
		</form>
	);
}

export default SiteSelect;
