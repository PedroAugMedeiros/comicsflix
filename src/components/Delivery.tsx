import Map from './Map.jsx'
import '../App.css';
import { useEffect, useState } from 'react';

interface DeliveryProps {
  setIsOrderCompletion: (value: boolean) => void;
  setIsShowDelivery: (value: boolean) => void;
  setSelectedAdress: (value: string) => void;
}


export default function Delivery(props: DeliveryProps) {

  const { setIsOrderCompletion, setSelectedAdress, setIsShowDelivery } = props;
  const [center, setCenter] = useState({
    lat: 17.7882,
    lng: -182.4324
  })

  function getUserLocation() {
navigator.geolocation.getCurrentPosition((position) => 
     setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  );
  } 

  useEffect(() => {
      getUserLocation()
  }, []) 
    
  return (
    <div className='flex z-40 top-10 gap-2 left-20 right-10 absolute m-0 p-2  w-[87%] bg-[#1E1E1E] rounded-md sm:w-[90%] sm:left-5 md:left-12'>
    <Map setIsOrderCompletion={setIsOrderCompletion} setSelectedAdress={setSelectedAdress} setIsShowDelivery={setIsShowDelivery} 
    zoom={5} center={center} />
    </div>
  )
}



