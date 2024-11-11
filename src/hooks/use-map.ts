import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import Location from '../models/location.ts';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  mainLocation: Location
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: mainLocation.latitude,
          lng: mainLocation.longitude
        },
        zoom: mainLocation.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else if (map) {
      map.setView(
        {
          lat: mainLocation.latitude,
          lng: mainLocation.longitude
        },
        mainLocation.zoom
      );
    }
  }, [mapRef, mainLocation, map]);

  return map;
}

export default useMap;
