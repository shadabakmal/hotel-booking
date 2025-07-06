import React from 'react'
import { Hero } from '../components/Hero'
import FeaturedDestination from '../FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'


export const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedDestination/>
        <ExclusiveOffers/>
        <Testimonial/>
        <NewsLetter/>
    </div>
  )
}
