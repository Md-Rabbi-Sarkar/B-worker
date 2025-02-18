import { CardElement, Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../Providers/AuthProvider'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function CheckOutForm({coin}) {
    const [error, setError] = useState('')
    const stripe = useStripe()
    const {user} = useContext(AuthContext)
    const elements = useElements()
    const navigate =useNavigate()
    const axiosSecuire = useAxiosSecure()
    const [clientSecret,steClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    useEffect(()=>{
        if(coin>0){
        axiosSecuire.post('/create-payment-intent',{price:coin})
        .then(res=>{
          console.log(res.data.clientSecret)
            steClientSecret(res.data.clientSecret)
        })}
    },[axiosSecuire,coin])
    // console.log(coin)
    const handleSubmit=async (e)=>{
      e.preventDefault()
        if(!stripe || !elements){
            return console.log('s')
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return console.log('t')
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('pay error',error)
            setError(error.message)
        }
        else{
          console.log('paymentMethode',paymentMethod)
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
                 Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "You successfully pay for coin",
                                showConfirmButton: false,
                                timer: 1500
                              });
                setTransactionId(paymentIntent.id)
                const payment ={
                    email: user.email,
                    price:coin,
                    transactionId: paymentIntent.id,
                    data: new Date(),
                    status:'pending'
                }
                const res = await axiosSecuire.post('/payments',payment)
                // console.log(res.data)
                navigate('/dashboard/paymentHistory')

            }
        }
    }
  return (
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
        {/* {transactionId && <p className='text-green-500'>Your Transaction id: {transactionId}</p>} */}
        </form>
    </div>
        
   
  )
}
