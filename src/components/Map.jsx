import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent(props) {
  const _ref = useRef();
  const TILE_LAYER_URL = "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
  const ATRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" title="OpenStreetMap">OpenStreetMap</a>, Imagery &copy; <a href="https://carto.com/" target="_blank" title="Carto">Carto</a>';

  useEffect(() => {
    if (!_ref.current) {
      // init map
      _ref.current = L.map("map", {
        center: [props.lat, props.lng],
        zoom: 18,
      });

      // Use layer of carto 
      L.tileLayer(TILE_LAYER_URL, {
        attribution: ATRIBUTION,
        subdomains: "abcd", 
        maxZoom: 19,
        minZoom: 2
      }).addTo(_ref.current);

      const customIconMarker = L.icon({
        iconUrl: "/lexisMapMarker.png",
        iconSize: [44, 67], // Icon size
        iconAnchor: [19, 57], // Anchor point
        popupAnchor: [0, -59], // Popup anchor
      });

      // add marker
      L.marker([props.lat, props.lng ], { icon: customIconMarker })
        .bindPopup("Biuro Lexis")
        .openPopup()
        .addTo(_ref.current);
    }
  }, [props.lat, props.lng]); // add props.lat and props.lng as dependencies

  return <div className="h-full z-20" id="map"></div>;
}