import React from 'react';
import { Profile } from './components/Profile';
import { TeamCard } from './components/TeamCard';

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center gap-10">
      
      <h1 className="text-2xl font-bold text-slate-700">
        Welcome to React!
      </h1>

      {/* Profile card (top) */}
      <Profile name="Prabesh Shrestha" role="Junior Developer" />

      {/* Team cards (bottom) */}
      <div className="flex gap-4 flex-wrap justify-center">
        <TeamCard name="Bart Simpson" role="Son" />
        <TeamCard name="Lisa Simpson" role="Daughter" />
        <TeamCard name="Maggie Simpson" role="Daughter" />
        <TeamCard name="Marge Simpson" role="Mother" />
        <TeamCard name="Homer Simpson" role="Father" />
      </div>

    </div>
  );
}
