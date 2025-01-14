import React from 'react'
import slider1 from '../../src/assets/slider1.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
    return (
        <Carousel>
            <div>
                <img src={slider1} />
                <h1 className='text-3xl'>"Your Time, Your Earnings"</h1>
                <p>Your Gateway to Micro Earnings</p>
            </div>
            <div>
                <img src={slider1} />
                <h1 className='text-3xl'>Complete Simple Tasks and Get Paid Instantly</h1>
                <p>Simplify Tasks, Amplify Earnings</p>
            </div>
            <div>
                <img src={slider1} />
                <h1 className='text-3xl'>"Transform Spare Minutes into Extra Income"</h1>
                <p>Where Every Task Pays Off</p>
            </div>
        </Carousel>
    )
}
