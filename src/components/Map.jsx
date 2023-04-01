import React, { useState, useRef, useEffect } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useApi } from '../hooks/useApi'
import Axios from 'axios';
import { REACT_APP_GOOGLE_API_KEY } from '../services/api';

export default function Map(props) {
  const mapRef = useRef(null);
  const [position, setPosition] = useState({
    lat: -25.0270548,
    lng: 115.1824598,
  });
  const [adress, setAdress] = useState();


  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenterChanged() {
    if (!mapRef.current) return;
    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  function renderLocation() {
    if (adress) {
      if(adress.length > 11) {
       if(adress.split(' ')[0].length > 6) { 
        return adress.substring(7, adress.length) 
      } else {
        return adress;
      }
      } 
      
      return (
        ''
      )
    }
  }


  function getLocation() {
    Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.lng}&&key=AIzaSyBtD1UNQzdpCHul2mninUhJhGJnQesnka0`)
      .then(response => {
        setAdress(response.data.results[0].formatted_address)
      })
    }

    useEffect(() => {
      getLocation()
    }, [position])

  return (
    <GoogleMap
      onLoad={handleLoad}
      onCenterChanged={handleCenterChanged}
      zoom={props.zoom}
      center={props.center}
      id="map"
      mapContainerClassName='w-[60%] z-20'
    >
      <div className='bg-red-500 h-72 absolute z-40'>{renderLocation()}</div>
      <Marker position={position} />
    </GoogleMap>
  );
}