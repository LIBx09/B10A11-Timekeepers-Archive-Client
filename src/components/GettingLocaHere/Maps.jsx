import { useEffect } from "react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  useEffect(() => {
    // Initialize map
    const map = L.map("map").setView([23.8103, 90.4125], 13); // Example: Dhaka

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Optional: Add a marker
    L.marker([23.8103, 90.4125]).addTo(map).bindPopup("You are here!");

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default Maps;
