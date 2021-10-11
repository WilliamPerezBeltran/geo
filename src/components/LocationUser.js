import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2lsbGlhbXBlcmV6MTAwIiwiYSI6ImNrdW0waW9rYTBkc3Qyb294Znl5OG1jeGEifQ._p3ra76aAXccttGpvObGBg";

export const LocationUser = () => {
  const mapContainer = useRef();

  useEffect(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v11",
        center: [-111.75, 40.581],
        zoom: 1,
      });

      new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map)
        .setPopup(new mapboxgl.Popup().setText("Current location").addTo(map));
    }
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default LocationUser;
