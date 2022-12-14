import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Header from './Header';
import About from './About';
import SiteSelect from './SiteSelect';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map({ site, setSite }) {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-86);
	const [lat, setLat] = useState(35.9);
	const [zoom, setZoom] = useState(6);

	useEffect(() => {
		if (map.current) return;
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	});

	useEffect(() => {
		if (!map.current) return;
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div className='map-app-container'>
			<div ref={mapContainer} className='map-container' />
			<div className='header-container'>
				<Header />
			</div>
			<div className='form-container'>
				<SiteSelect site={site} setSite={setSite} />
			</div>
			<div className='sidebar'>
				<img
					className='site-image'
					src='https://media.defense.gov/2021/Jun/15/2002742197/-1/-1/0/210408-A-EO110-1050.JPG'
					alt=''
					id='site-img'
				/>
				<div className='site-name'>{site.name}</div>
				<div className='site-code'>Site #: {site.code}</div>
				<div className='streamflow'>
					Streamflow:
					{`${site.streamflow} ${site.unitCode}
					${site.variableDescription}`}
				</div>
				<div className='date-time'>Date/Time: {site.dateTime}</div>
				<div className='location'>
					Location: {site.latitude}, {site.longitude}
				</div>
				<About />
			</div>
		</div>
	);
}

export default Map;
