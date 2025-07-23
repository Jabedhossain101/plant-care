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
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white py-10 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
        {/* Plant Image */}
        <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-green-200 to-green-50 p-4">
          <img
            src={Photo}
            alt={Plant}
            className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-96 transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          {/* Owner Info */}
          <div className="flex items-center mb-4">
            <img
              alt="Owner"
              src="https://source.unsplash.com/100x100/?portrait"
              className="object-cover w-14 h-14 rounded-full shadow-lg border-2 border-green-400"
            />
            <div className="ml-4">
              <span className="block text-lg font-bold text-green-700">
                Plant owner: {userName}
              </span>
              <span className="block text-xs text-gray-500">
                Email: {userEmail}
              </span>
            </div>
          </div>
          {/* Plant Info */}
          <div>
            <p className="text-xs text-gray-400 mb-1">{`Today is: ${formatted}`}</p>
            <h2 className="text-2xl font-extrabold text-green-800 mb-2">
              {Plant}
            </h2>
            <p className="text-gray-700 mb-3 italic">{description}</p>
            <ul className="space-y-1 mb-4">
              <li>
                <span className="font-semibold text-green-700">Health:</span>{' '}
                {healthStatus}
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Care Level:
                </span>{' '}
                {careLevel}
              </li>
              <li>
                <span className="font-semibold text-green-700">Category:</span>{' '}
                {category}
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Watering Frequency:
                </span>{' '}
                {wateringFrequency}
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Last Watered:
                </span>{' '}
                {lastWateredDate}
              </li>
              <li>
                <span className="font-semibold text-green-700">
                  Next Watering:
                </span>{' '}
                {nextWateringDate}
              </li>
            </ul>
          </div>
          {/* Like & Comments */}
          <div>
            <button
              onClick={handleLikeToggle}
              className={`w-full py-2 rounded-lg font-semibold shadow transition-all duration-200 mb-3 ${
                hasLiked
                  ? 'bg-pink-500 hover:bg-pink-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {hasLiked ? 'Unlike' : 'Like'} ({likes})
            </button>
            <form
              onSubmit={handleCommentSubmit}
              className="flex flex-col gap-2 mb-2"
            >
              <input
                type="text"
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="p-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all"
              >
                Post Comment
              </button>
            </form>
            <div>
              <h3 className="font-semibold text-green-700 mb-1">Comments:</h3>
              {comments.length === 0 && (
                <p className="text-sm text-gray-400">No comments yet.</p>
              )}
              <ul className="space-y-2 max-h-32 overflow-y-auto pr-1">
                {comments.map((cmt, idx) => (
                  <li
                    key={idx}
                    className="text-sm bg-green-50 border border-green-100 p-2 rounded-lg shadow-sm"
                  >
                    {cmt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
