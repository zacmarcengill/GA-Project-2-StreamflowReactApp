import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiemFjbWFyY2VuZ2lsbCIsImEiOiJjbDh0ajN0czIwNXhpM3BwODYxbjYwbmhyIn0.odDnWTriSpnbJf3IE8vfrw';

function Map({ site }) {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-86);
	const [lat, setLat] = useState(35.9);
	const [zoom, setZoom] = useState(7);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [lng, lat],
			zoom: zoom,
		});
	});

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div className='map-container'>
			<div ref={mapContainer} className='map' />
			<div className='sidebar-container'>
				<div>{site.name}</div>
				<div>Site #: {site.code}</div>
				<div>
					Location: {site.latitude}, {site.longitude}
				</div>
				<div>
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div>
			</div>
		</div>
	);
}

export default Map;
