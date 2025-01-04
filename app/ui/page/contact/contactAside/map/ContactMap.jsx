"use client";

import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Configuration des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function ContactMap() {
  const mapContainerRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!isClient || !mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current).setView(
      [43.33579830809601, 6.35642794001148],
      10
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup("A pretty CSS3 popup. <br /> Easily customizable.");

    return () => {
      map.remove();
    };
  }, [isClient]);

  if (!isClient) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="map">
      <div
        ref={mapContainerRef}
        style={{ height: "100%", minHeight: "300px" }}
      />
    </div>
  );
}
