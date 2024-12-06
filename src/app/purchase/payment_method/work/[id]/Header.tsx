import { ChevronLeft } from 'lucide-react';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-white p-4">
      {/* 左側の戻るボタン */}
      <button className="flex items-center text-black">
        <ChevronLeft className="size-6" />
      </button>

      {/* 中央のタイトル */}
      <h1 className="flex-1 text-center text-lg font-bold">12月16日</h1>
    </header>
  );
};

export default Header;
