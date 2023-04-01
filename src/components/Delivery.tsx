import React from 'react'
import Map from './Map.jsx'
import { REACT_APP_GOOGLE_API_KEY } from '../services/api.js'
import { LoadScript } from '@react-google-maps/api'
import '../App.css';

export default function Delivery() {
    
  return (
    <div className='flex z-40 top-20 left-20 bottom-20 right-20 absolute m-0 p-5 h-[80vh] w-[90%] bg-white rounded-md'>  <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}>
    <Map zoom={5} center={{ lat: -25.0270548, lng: 115.1824598 }}></Map>
  </LoadScript>
    </div>
  )
}
