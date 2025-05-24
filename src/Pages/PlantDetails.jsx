import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { format } from 'date-fns';
const PlantDetails = () => {
  const data = useLoaderData();
  const today = new Date();
  const formatted = format(today, 'PPP');
  const {
    Photo,
    Plant,
    careLevel,
    category,
    description,
    healthStatus,
    lastWateredDate,
    nextWateringDate,
    userEmail,
    userName,
    wateringFrequency,
    likes: initialLikes = 0,
  } = data;

  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleLikeToggle = () => {
    if (hasLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setHasLiked(!hasLiked);
  };

  const handleCommentSubmit = e => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-green-50 mx-auto dark:text-gray-800 m-5">
      {/* User Info */}
      <div className="flex space-x-4">
        <img
          alt=""
          src="https://source.unsplash.com/100x100/?portrait"
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-semibold">Plant owner: {userName}</span>
          <span className="text-xs dark:text-gray-600">Email: {userEmail}</span>
        </div>
      </div>

      <div>
        <img
          src={Photo}
          alt={Plant}
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <p className="text-sm mt-1">{`Today is: ${formatted}`}</p>
        <h2 className="mb-1 text-xl font-semibold">Plant Name: {Plant}</h2>
        <p className="text-md dark:text-gray-600">
          {description}This plant is known for its unique characteristics and
          seasonal beauty, making it a popular choice among garden enthusiasts.
          It plays a vital role in maintaining ecological balance and adds a
          touch of green elegance to its surroundings.
        </p>
        <p>
          <span className="font-bold">Health: </span>
          {healthStatus}
        </p>

        <p>
          <span className="font-bold">Care Level: </span>
          {careLevel}
        </p>
        <p>
          <span className="font-bold">Category: </span>
          {category}
        </p>
        <p>
          <span className="font-bold">Watering Frequency: </span>
          {wateringFrequency}
        </p>

        <div>
          <p>
            <span className="font-bold">Last Watered Date: </span>
            {lastWateredDate}
          </p>
          <p>
            <span className="font-bold">Next Watered Date: </span>
            {nextWateringDate}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-4 items-center">
          <button
            onClick={handleLikeToggle}
            className={`px-4 py-2 rounded-md text-white ${
              hasLiked
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {hasLiked ? 'Unlike' : 'Like'} ({likes})
          </button>
        </div>

        <form onSubmit={handleCommentSubmit} className="space-y-2">
          <input
            type="text"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Post Comment
          </button>
        </form>

        <div className="mt-2">
          <h3 className="font-semibold mb-1">Comments:</h3>
          {comments.length === 0 && (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
          <ul className="space-y-1">
            {comments.map((cmt, idx) => (
              <li key={idx} className="text-sm bg-gray-100 p-2 rounded-md">
                {cmt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
