import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to Excel Glass Inc.</h1>
        <p className="mt-4">High Quality Glass Etching Services Since 1994</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 rounded">Contact Us</button>
      </div>
    </div>
  );
};

export default HeroSection;