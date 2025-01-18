import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from './Component/CheckOutForm'
import { useLocation } from 'react-router-dom'
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_pK)
export default function Payment() {
    const location = useLocation()
    const coin = location.state?.coin || 'No card Selected'
    console.log(coin)
  return (
    <div>
        <Elements stripe={stripePromise}>
            <CheckOutForm coin={coin}></CheckOutForm>
        </Elements>
    </div>
  )
}
