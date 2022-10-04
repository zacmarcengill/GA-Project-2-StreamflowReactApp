import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiemFjbWFyY2VuZ2lsbCIsImEiOiJjbDh0ajN0czIwNXhpM3BwODYxbjYwbmhyIn0.odDnWTriSpnbJf3IE8vfrw';

function Map() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-86);
	const [lat, setLat] = useState(35.9);
	const [zoom, setZoom] = useState(7);

	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
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
		<div className='map'>
			<div ref={mapContainer} className='map-container' />
		</div>
	);
}

export default Map;
