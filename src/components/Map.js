import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useStore } from "react-redux";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoid2lsbGlhbXBlcmV6MTAwIiwiYSI6ImNrdW0waW9rYTBkc3Qyb294Znl5OG1jeGEifQ._p3ra76aAXccttGpvObGBg";

export const Map = () => {
  const store = useStore();
  const jobs = store.getState().reducerJobs.jobs;
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-111.75, 40.581],
      zoom: 1,
    });

    for (const marker of jobs) {
      new mapboxgl.Marker()
        .setLngLat([marker.longitude, marker.latitude])
        .addTo(map)
        .setPopup(new mapboxgl.Popup().setText(marker.title).addTo(map));
    }

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default Map;
