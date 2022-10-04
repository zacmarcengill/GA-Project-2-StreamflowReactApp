import { getSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
// import App from './App';

function SiteSelect() {
	const [code, setCode] = useState('03424860');
	console.log('State Code: ' + code);

	function handleChange(event) {
		setCode(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getSite();
	}

	function getSite() {
		const urlString = {
			sites: code,
		};

		const url = `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${urlString.sites}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(
					'success!',
					'Site Name: ' + res.value.timeSeries[0].sourceInfo.siteName,
					'Site Code: ' + res.value.timeSeries[0].sourceInfo.siteCode[0].value,
					'Streamflow ' +
						'(' +
						res.value.timeSeries[0].variable.variableDescription +
						res.value.timeSeries[0].variable.unit.unitCode +
						'): ' +
						res.value.timeSeries[0].values[0].value[0].value,
					res.value.timeSeries[0].values[0].value[0].dateTime
				);
			})
			.catch((err) => {
				console.log('something went wrong...', err);
			});
	}
	getSite();

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<label htmlFor='site-select'>
				Choose Location:
				<select onChange={handleChange} name='site-select' id='site-select'>
					<option value='03424860'>CANEY FORK AT STONEWALL</option>
					<option value='03582000'>ELK RIVER ABOVE FAYETTEVILLE, TN</option>
					<option value='03596000'>DUCK RIVER BELOW MANCHESTER, TN</option>
				</select>
			</label>
		</form>
	);
}

export default SiteSelect;
