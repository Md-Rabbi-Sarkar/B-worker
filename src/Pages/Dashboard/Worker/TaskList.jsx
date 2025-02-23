import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function TaskList() {
  const taskList = useLoaderData();
  const [sortedTasks, setSortedTasks] = useState(taskList);

  // Function to sort in ascending order
  const sortAscending = () => {
    const sorted = [...sortedTasks].sort((a, b) => a.payableAmount - b.payableAmount);
    setSortedTasks(sorted);
  };

  // Function to sort in descending order
  const sortDescending = () => {
    const sorted = [...sortedTasks].sort((a, b) => b.payableAmount - a.payableAmount);
    setSortedTasks(sorted);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 my-5">
        <button className="btn btn-success" onClick={sortAscending}>Sort Ascending</button>
        <button className="btn btn-error" onClick={sortDescending}>Sort Descending</button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center'>
        {sortedTasks.map((task) => (
          <div data-aos="flip-left" key={task._id} className="card bg-base-100 w-96 shadow-xl h-full">
            <figure className="px-10 pt-10">
              <img
                className="rounded-xl w-full h-48 object-cover"
                src={task.taskImageUrl}
                alt="task photo"
              />
            </figure>
            <div className="card-body items-center text-center w-full">
              <h2 className="card-title">Task Title: {task.taskTitle}</h2>
              <p>Payable Amount: {task.payableAmount}</p>
              <div className="card-actions">
                <button className="btn btn-primary">
                  <Link to={`/dashboard/taskDetails/${task._id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
