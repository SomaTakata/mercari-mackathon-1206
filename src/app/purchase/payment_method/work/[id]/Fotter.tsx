import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full flex-col items-center justify-between gap-3 border-t border-gray-200  bg-white p-4">
      <button className="w-full flex-1 rounded-md bg-red-500 py-3 font-semibold text-white">
        応募前の準備にすすむ
      </button>
    </footer>
  );
};

export default Footer;
