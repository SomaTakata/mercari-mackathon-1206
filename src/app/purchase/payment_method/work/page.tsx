import React from 'react';

import DateSelector from './DateSelector';
import FilterButton from './FilterButton';
import Footer from './Fotter';
import Header from './Header';
import JobCard from './JobCard';

const JobListing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 上部固定のヘッダー */}
      <Header />

      {/* コンテンツ部分 */}
      <div className="py-[55px] pb-[140px]">
        {' '}
        {/* HeaderとFooterの高さ分余白を確保 */}
        <div className="flex w-full justify-end px-4 pt-4">
          <FilterButton />
        </div>
        <DateSelector />
        <JobCard />
      </div>

      {/* 下部固定のフッター */}
      <Footer />
    </div>
  );
};

export default JobListing;
