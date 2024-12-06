import { Sliders } from 'lucide-react'; // アイコンをインポート
import React from 'react';

const FilterButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 rounded-md border border-red-500 px-4 py-2 text-red-500 hover:bg-red-100">
      <Sliders className="size-4" />
      <span className="text-sm font-bold">絞り込み</span>
    </button>
  );
};

export default FilterButton;
