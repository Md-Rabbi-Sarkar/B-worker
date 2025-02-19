import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function Testimonial() {
  return (
    <div className='my-10 mx-10'>
      <h1 className='text-5xl text-center mb-10'>-----Testimonial-----</h1>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => {}}
    >
      <SwiperSlide>
      <div className='aspect-square overflow-hidden rounded-lg'>
          <img className='w-full h-full object-cover' src={"https://i.ibb.co.com/tMxmB7s/IMG20231119182226.jpg"} alt="" />
        </div>

       <h1>Rabbi</h1>
        <p>"This platform has transformed the way I work. The tasks are easy to complete, and the payments are super fast!"</p>
        
        
      </SwiperSlide>
      <SwiperSlide>
      <div className='aspect-square overflow-hidden rounded-lg'>
          <img className='w-full h-full object-cover' src={"https://i.ibb.co.com/Jnyff8m/FB-IMG-1737689790594.jpg"} alt="" />
        </div>

        <h1>Sabbir</h1>
       <p>"The best part is the flexibility. I can earn extra money while working on tasks that fit my schedule."</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='aspect-square overflow-hidden rounded-lg'>
          <img className='w-full h-full object-cover' src={"https://i.ibb.co.com/qkTBB3t/FB-IMG-1737689476477.jpg"} alt="" />
        </div>
        <h1>Rocky</h1>
        <p>I love how intuitive the platform is. Posting tasks is simple, and I get quality results every time."</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='aspect-square overflow-hidden rounded-lg'>
          <img className='w-full h-full object-cover' src={"https://i.ibb.co.com/9NXBwFL/FB-IMG-1737690289409.jpg"} alt="" />
        </div>
        
        <h1>Nayon</h1>
        <p>"I’ve earned a consistent side income thanks to this platform. The tasks are fun and easy to complete, and withdrawals are seamless!"</p>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
    
  )
}
