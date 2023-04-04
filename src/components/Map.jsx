import React, { useState, useRef, useEffect } from 'react';
import {  GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Axios from 'axios';
import { REACT_APP_GOOGLE_API_KEY } from '../services/api';

export default function Map(props) {

  let mapRef = useRef(null)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_API_KEY
  })

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
        setAdress(adress.substring(7, adress.length)) 
      }
        return adress;
      
      } 
      
      return (
        'Not Found Location'
      )
    }
  }

  function handleClick() {
    props.setSelectedAdress(adress)
    props.setIsOrderCompletion(true)
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


    const renderMap = () => {
  
      return <GoogleMap
        onLoad={handleLoad}
      onCenterChanged={handleCenterChanged}
              zoom={props.zoom}
      center={props.center}
      id="map"
      mapContainerClassName='w-[100%] z-20'
      >
         <Marker position={position} visible={true} className='z-60 absolute'/>
         <div className='flex justify-end '>
         <button onClick={() => props.setIsShowDelivery(false)} className='flex bg-[#BD1023]
         mt-2.5 mr-16 absolute text-white font-semibold  p-2 hover:scale-110 rounded-md sm:mt-16 sm:left-2'>Close Map</button>
         </div>
         <section className='flex flex-col justify-around  bottom-2 gap-2 bg-[#BD1023] text-white p-2 left-2.5 absolute h-72 w-[20%] font-semibold rounded-md text-center text-[#333] sm:w-[35%]  sm:h-[60%] md:h-[40%]'>
          <h1>SELECT ADRESS</h1>
          <div>
          <h2>ACTUAL ADRESS:</h2>
         <div className='bg-white max-h-52 z-40 text-wrap p-2 rounded-md text-[#333]'>{renderLocation()}</div>
         </div>
         <button onClick={handleClick} className='bg-white rounded-md p-2 z-60 text-[#333] hover:text-[#BD1023] hover:scale-105 font-semibold'>SEND COMIC</button>
         </section>
      </GoogleMap>
    }

  return isLoaded ? renderMap() :  <div>Not Found Map</div>
}