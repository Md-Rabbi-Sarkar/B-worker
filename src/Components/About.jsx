import React from 'react'

export default function About() {
  return (
    <div className="  flex flex-col flex-grow items-center justify-center pt-20 px-4 py-10">
      <div className="bg-slate-50 shadow-lg shadow-cyan-500/50 rounded-lg p-6 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
        <p className="text-gray-600 mt-4">
          Welcome to our website! We are dedicated to providing the best services to our customers. Our mission is to make your experience smooth and enjoyable.
        </p>
      </div>
    </div>
  )
}
