import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { SiGooglemaps } from "react-icons/si";
import ReactDOMServer from "react-dom/server"; // Import ReactDOMServer

// Membuat ikon marker menggunakan react-icons
const createIcon = (IconComponent) => {
  const iconHtml = ReactDOMServer.renderToString(
    <IconComponent style={{ color: "green", fontSize: "24px" }} />
  ); // Render icon to string
  return L.divIcon({
    className: "custom-icon",
    html: iconHtml,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
};

export const MapComponent = () => {
  const positions = [
    {
      id: 1,
      lat: -7.952226466042377,
      lng: 112.62355018318105,
      name: "Head Office",
      icon: SiGooglemaps,
      gmapsLink: "https://maps.app.goo.gl/xoAARhYcedKVf799A", // URL Google Maps
    },
    {
      id: 2,
      lat: -7.2504,
      lng: 112.7688,
      name: "Surabaya",
      icon: SiGooglemaps,
      gmapsLink: "https://www.google.com/maps/place/Surabaya",
    },
    {
      id: 3,
      lat: -6.9147,
      lng: 107.6098,
      name: "Bandung",
      icon: SiGooglemaps,
      gmapsLink: "https://www.google.com/maps/place/Bandung",
    },
  ];

  // Menggunakan useRef untuk mendapatkan referensi marker
  const headOfficeMarkerRef = useRef(null);

  useEffect(() => {
    // Menggunakan setTimeout untuk membuka popup setelah render
    const timeout = setTimeout(() => {
      if (headOfficeMarkerRef.current) {
        headOfficeMarkerRef.current.openPopup();
      }
    }, 100); // Tunggu sejenak sebelum membuka popup

    return () => clearTimeout(timeout); // Membersihkan timeout jika komponen di-unmount
  }, []);

  return (
    <div className="bg-slate-200 z-0">
      <div className="container pt-16 p-4 mx-auto xl:pt-8  z-0">
        <MapContainer
          center={[-7.952226466042377, 112.62355018318105]} // Center peta pada Head Office
          zoom={10}
          scrollWheelZoom={false}
          className="map-container "
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {positions.map(({ id, lat, lng, name, icon, gmapsLink }) => (
            <Marker
              key={id}
              position={[lat, lng]}
              icon={createIcon(icon)}
              ref={id === 1 ? headOfficeMarkerRef : null} // Menyimpan ref untuk Head Office
            >
              <Popup>
                <a
                  href={gmapsLink}
                  target="_blank"
                  rel="noopener noreferrer" // Untuk keamanan
                  style={{ color: "black", textDecoration: "none" }}
                >
                  {name}
                </a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
