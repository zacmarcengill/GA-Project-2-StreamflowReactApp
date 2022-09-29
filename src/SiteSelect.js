import React from 'react';

function SiteSelect(props) {
	return (
		<form className='form-container'>
			<label htmlFor='site-select'>Choose Location: </label>
			<select name='site-select' id='site-select'>
				<option value='caney-fork'>Caney Fork</option>
			</select>
		</form>
	);
}

export default SiteSelect;
