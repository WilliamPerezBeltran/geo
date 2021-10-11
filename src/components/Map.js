import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import SnotelSites from "./lcc_snotel_sites.json"

// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
import "mapbox-gl/dist/mapbox-gl.css";
// import "./app.css"

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken =
  "pk.eyJ1Ijoid2lsbGlhbXBlcmV6MTAwIiwiYSI6ImNrdW0waW9rYTBkc3Qyb294Znl5OG1jeGEifQ._p3ra76aAXccttGpvObGBg";

export const Map = () => {
  const mapContainer = useRef();

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-111.75, 40.581],
      // center: [106.71978,-11.121309],
      zoom: 1,
      // pitch: 60,
      // bearing: 80,
    });

// const marker1 = new mapboxgl.Marker()
// .setLngLat([106.71978,-11.121309])
// .addTo(map);
 
// const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
// .setLngLat([106.71978, -11.121309])
// .addTo(map);




var popup = new mapboxgl.Popup()
  .setText('oleeeeeeeeeeeee')
  .addTo(map);

let marker = new mapboxgl
  .Marker()
    .setLngLat([106.71978, -11.121309])
    .addTo(map)
    .setPopup(popup);



    // cleanup function to remove map on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default Map;

// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// export const Map = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-74.083652);
//   const [lat, setLat] = useState(4.6533326);
//   const [zoom, setZoom] = useState(9);

//   mapboxgl.accessToken =
//     "pk.eyJ1Ijoid2lsbGlhbXBlcmV6MTAwIiwiYSI6ImNrdW0waW9rYTBkc3Qyb294Znl5OG1jeGEifQ._p3ra76aAXccttGpvObGBg";

//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });

//   return (
//     <div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// };
// export default Map;
