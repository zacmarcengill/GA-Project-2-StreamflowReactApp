import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiemFjbWFyY2VuZ2lsbCIsImEiOiJjbDh0ajN0czIwNXhpM3BwODYxbjYwbmhyIn0.odDnWTriSpnbJf3IE8vfrw';

function Results() {
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

	return (
		<div className='results'>
			<div ref={mapContainer} className='map-container' />
			<h2>Results Go Here</h2>
		</div>
	);
}

export default Results;
