import React, { useState } from 'react';

interface CardProps {
  name: string;
  role: string;
}

export function TeamCard({ name, role }: CardProps) {
  const [votes, setVotes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 text-center">
      <h2 className="text-xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 mb-4">{role}</p>

      <button
        onClick={() => setVotes((prev) => prev + 1)}
        className="bg-green-100 text-green-700 font-bold py-2 px-4 rounded-lg hover:bg-green-200 transition"
      >
        Vote 👍 {votes}
      </button>
    </div>
  );
}
