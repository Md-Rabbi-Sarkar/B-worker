import React from 'react'
import Slider from '../Components/Slider'
import Testimonial from '../Components/Testimonial'
import BestWorkers from '../Components/BestWorkers'
import AOS from 'aos';
import 'aos/dist/aos.css';
import News from '../Components/News';
import Events from '../Components/Events';
import About from '../Components/About';
import BestBuyer from '../Components/BestBuyer';
import ExpensiveTask from '../Components/ExpensiveTask';
import Contact from '../Components/Contact';
AOS.init();
export default function Home() {
  return (
    <div >
      <Slider></Slider>
      <BestWorkers></BestWorkers>
      <BestBuyer></BestBuyer>
      <ExpensiveTask></ExpensiveTask>
      <Testimonial></Testimonial>
      <News></News>
      <Events></Events>
      <About></About>
      <Contact></Contact>
    </div>
  )
}
