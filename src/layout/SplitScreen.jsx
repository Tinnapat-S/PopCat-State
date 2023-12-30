import React from 'react';

function SplitScreen({ children }) {
  const [left, right] = children;
  return (
    <div className='flex bg-black text-white'>
      {/* Left Side */}
      <div className='flex-1 h-screen flex flex-col '>{left}</div>
      {/* Right Side */}
      <div className='flex-1 h-screen p-4 flex flex-col gap-y-2 overflow-scroll'>{right}</div>
    </div>
  );
}

export default SplitScreen;
