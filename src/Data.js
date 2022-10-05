import React from 'react';

function Data({ site }) {
	return (
		<div className='data-container'>
			<img
				className='site-image'
				src='https://media.defense.gov/2021/Jun/15/2002742197/-1/-1/0/210408-A-EO110-1050.JPG'
				alt=''
				id='site-img'
			/>
			<h3 className='site-name'>{site.name}</h3>
			<h3 className='site-code'>Site #: {site.code}</h3>
			<h3 className='site-location'>
				{site.code}/{site.latitude}, {site.longitude}
			</h3>
			<h3 className='streamflow'>
				Streamflow:{' '}
				{`${site.streamflow} ${site.unitCode}
				${site.variableDescription}`}
			</h3>
			<h3 className='date-time'>Date/Time: {site.dateTime}</h3>
		</div>
	);
}

export default Data;
