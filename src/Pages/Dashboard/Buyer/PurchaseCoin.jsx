import React, { useState } from 'react'
import { Link, replace, useNavigate } from 'react-router-dom'

export default function PurchaseCoin() {
    const navigate = useNavigate()
    const cards = [
        { id: 1, coin: 10 ,dollar:1},
        { id: 2, coin: 150,dollar:10 },
        { id: 3, coin: 500,dollar:20 },
        { id: 4, coin: 1000,dollar:35 },
      ];
      const handleClidk = coin=>{
        navigate('/dashboard/payment',{state: {coin}, replace} )
      }
    
    return (
        <div  className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {cards.map(card=>
            <div onClick={()=>handleClidk(card.coin)} key={card.id} className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className='text-5xl'>Coin {card.coin}</h2>
                    <p className='text-3xl'>$ {card.dollar}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>setCoin(10)} className="btn"><Link to='/dashboard/chectOutFrom'>Buy Now</Link></button>
                    </div>
                </div>
            </div>
        )}
        </div>
        
    )
}
