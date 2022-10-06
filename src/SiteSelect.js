import React from 'react';

function SiteSelect({ site, setSite }) {
	function handleChange(event) {
		console.log('handleChange Ran!');
		setSite({ ...site, code: event.target.value });
	}

	function handleSubmit(event) {
		console.log('handleSubmit Ran!');
		event.preventDefault();
		getSite();
	}

	function getSite() {
		const urlString = {
			sites: site.code,
		};

		const url = `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${urlString.sites}`;

		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setSite({
					...site,
					code: res.value.timeSeries[0].sourceInfo.siteCode[0].value,

					name: res.value.timeSeries[0].sourceInfo.siteName,

					latitude:
						res.value.timeSeries[0].sourceInfo.geoLocation.geogLocation
							.latitude,

					longitude:
						res.value.timeSeries[0].sourceInfo.geoLocation.geogLocation
							.longitude,

					streamflow: res.value.timeSeries[0].values[0].value[0].value,

					unitCode: res.value.timeSeries[0].variable.unit.unitCode,

					variableDescription:
						res.value.timeSeries[0].variable.variableDescription,

					dateTime: res.value.timeSeries[0].values[0].value[0].dateTime,
				});
				console.log('Success! API date retrieved!');
			})
			.catch((err) => {
				console.log('something went wrong...', err);
			});
	}

	return (
		<form onSubmit={handleSubmit} className='form-container'>
			<label htmlFor='site-select'>
				Select Location:
				<br />
				<select onChange={handleChange} name='site-select' id='site-select'>
					<option value='03424860'>CANEY FORK</option>
					<option value='03582000'>ELK RIVER</option>
					<option value='03596000'>DUCK RIVER</option>
				</select>
				<button type='submit'>Submit</button>
			</label>
			<div>
				<h6 className='instructions'>Submit to Update Data</h6>
			</div>
		</form>
	);
}

export default SiteSelect;
