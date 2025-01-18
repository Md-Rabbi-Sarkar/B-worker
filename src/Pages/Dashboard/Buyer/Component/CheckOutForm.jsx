import { CardElement, Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../../../Providers/AuthProvider'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'

export default function CheckOutForm() {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_pK)
    const location = useLocation()
    const coin = location.state?.coin || 'No card Selected'
    
    const [error, setError] = useState('')
    const stripe = useStripe()
    const {user} = useContext(AuthContext)
    const elements = useElements()
    const axiosSecuire = useAxiosSecure()
    const [clientSecret,steClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    useEffect(()=>{
        if(coin>0){
        axiosSecuire.post('/create-payment-intent',{coin})
        .then(res=>{
            steClientSecret(res.data.clientSecret)
        })}
    },[axiosSecuire,coin])
    // console.log(coin)
    const handleSubmit=async (e)=>{
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('pay error',paymentMethod)
            setError('')
        }
        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email:user?.email || 'anonymus',
                    name: user?.displayName || 'anonymus',
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment Intent',paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id)
                setTransactionId(paymentIntent.id)
                const payment ={
                    email: user.email,
                    price:coin,
                    transactionId: paymentIntent.id,
                    data: new Date(),
                    status:'pending'
                }
                const res = await axiosSecuire.post('/payments',payment)
                console.log(res.data)

            }
        }
    }
  return (
    <div>
        <Elements stripe ={stripePromise}>
        <div>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm btn-primary my-4' type="submit" >
          Pay
        </button>
        <p className='bg-red-600'>{error}</p>
        {transactionId && <p className='text-green-500'>Your Transaction id: {transactionId}</p>}
        </form>
    </div>
        </Elements>
    </div>
  )
}
