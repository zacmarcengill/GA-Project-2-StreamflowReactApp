import React from 'react';

function SiteSelect(props) {
	return (
		<form className='form-container'>
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
