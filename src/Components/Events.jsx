import React from 'react'

export default function Events() {
  const eventData = [
    {
      title: "Weekly Bonus Challenge",
      date: "February 25, 2025",
      description: "Complete 10 tasks this week and earn a 20% bonus!",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Referral Contest",
      date: "March 5, 2025",
      description: "Top 3 referrers will win exclusive rewards. Invite now!",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Flash Task Event",
      date: "March 10, 2025",
      description: "Limited-time tasks available for 3 hours only. Hurry up!",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className='my-20 mx-16 py-10'>
      <h1 className='text-5xl text-center mb-10 underline pb-5'>-Upcoming Events-</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {eventData.map((event, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-10">
          <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-sm text-gray-600">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};
