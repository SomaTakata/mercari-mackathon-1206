'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full flex-col items-center justify-between gap-3 border-t border-gray-200  bg-white p-4">
      <button
        className="w-full flex-1 rounded-md bg-red-500 py-3 font-semibold text-white"
        onClick={() => router.push('/purchase/payment_method/work')}
      >
        追加する
      </button>
    </footer>
  );
};

export default Footer;
