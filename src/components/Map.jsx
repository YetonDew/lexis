import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent(props) {
  const _ref = useRef();

  useEffect(() => {
    if(!_ref.current){
        _ref.current = L.map("map", {
            center: [props.lat, props.lng],
            zoom: 20,
          });
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
            _ref.current
          );
          L.marker([props.lat, props.lng])
            .bindPopup("Biuro Lexis")
            .openPopup()
            .addTo(_ref.current);
    }
  }, []);
  return <div className="h-[300px] z-20" id="map"></div>;
}
