'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-between gap-3 border-t border-gray-200  bg-white p-4">
      <button className="flex-1 rounded-md bg-gray-800 py-3 font-semibold text-white">Pay</button>
      <button className="flex-1 rounded-md bg-red-500 py-3 font-semibold text-white">購入する</button>
    </footer>
  );
};

export default Footer;
