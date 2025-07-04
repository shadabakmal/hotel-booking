import React from 'react'
import { roomsDummyData } from './assets/assets'
import { HotelCard } from './components/HotelCard'
import Title from './components/Title'

function FeaturedDestination() {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title="Featured Destination" subTitle='Discover our handpicked selection of exceptional properties around the world, offering unparalled luxury and unforgettable experiences.' />
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room,index)=>(
                <HotelCard key={room._id} index={index} room={room} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedDestination