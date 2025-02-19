import React from 'react'

export default function News() {
  const newsData = [
    {
      title: "Earn $5 Completing Simple Surveys",
      description: "Complete quick surveys and get paid instantly.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "New Micro Tasks Available",
      description: "Check out new paid tasks available now!",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Limited-Time Bonus Tasks!",
      description: "Earn 2x rewards for a limited time.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className='my-10 mx-20 py-10'>
      <h1 className='text-5xl text-center mb-10'>-----Latest News-----</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
      {newsData.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-10">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};