import React from 'react'
import Slider from '../Components/Slider'
import Testimonial from '../Components/Testimonial'
import BestWorkers from '../Components/BestWorkers'
import AOS from 'aos';
import 'aos/dist/aos.css';
import News from '../Components/News';
import Events from '../Components/Events';
import About from '../Components/About';
AOS.init();
export default function Home() {
  return (
    <div >
      <Slider></Slider>
      <BestWorkers></BestWorkers>
      <Testimonial></Testimonial>
      <News></News>
      <Events></Events>
      <About></About>
    </div>
  )
}
