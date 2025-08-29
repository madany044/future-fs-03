'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RewardsSection() {
  const [rewards, setRewards] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:1337/api/rewards')
      .then((res) => {
        setRewards(res.data.data);
      })
      .catch((err) => {
        setRewards([]);
        console.error('Error fetching rewards:', err);
      });
  }, []);

  if (rewards === null) {
    return (
      <p className="text-center mt-6 text-gray-600">Loading rewards...</p>
    );
  }
  if (rewards.length === 0) {
    return (
      <p className="text-center mt-6 text-gray-600">No rewards available.</p>
    );
  }

  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-3xl font-extrabold text-starbucksGreen mb-8 text-center">Rewards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {rewards.map((reward) => (
            <div key={reward.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-starbucksGreen">{reward.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {Array.isArray(reward.description) && reward.description.length > 0
                  ? reward.description[0].children.map((child) => child.text).join('')
                  : ''}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-starbucksGold text-starbucksGreen font-semibold rounded-full hover:bg-yellow-400 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
