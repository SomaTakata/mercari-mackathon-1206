'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const JobCard: React.FC = () => {
  // 選択されたカードのインデックスを管理
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const jobs = [
    {
      image: '/user1.png',
      tag: '未経験者歓迎',
      title: '今なら給与500円UP中！！スキマバイト経験者歓迎',
      time: '17:00 - 22:00',
      location: '2.0km 埼玉県上尾市',
      salary: '¥6,750',
      points: '+P800対象',
    },
    {
      image: '/user2.png',
      tag: '未経験者歓迎',
      title: 'オープニングスタッフ大募集／ペットフードやペットおやつが充実した環境です',
      time: '9:00 - 17:30',
      location: '3.6km 埼玉県さいたま市',
      salary: '¥9,000',
      points: null,
    },
    {
      image: '/user3.png',
      tag: '未経験者歓迎',
      title: 'オープニングスタッフ大募集／ペットフードやペットおやつが充実した環境です',
      time: '9:00 - 17:30',
      location: '3.6km 埼玉県さいたま市',
      salary: '¥9,000',
      points: null,
    },
    {
      image: '/user4.png',
      tag: '未経験者歓迎',
      title: '宅配寿司 銀のさらスタッフ募集（長時間勤務も可能です！）',
      time: '10:00 - 14:00',
      location: '5.0km 埼玉県川越市',
      salary: '¥4,500',
      points: '+P500対象',
    },
  ];

  const router = useRouter();
  return (
    <div className="bg-gray-100  p-4">
      {/* 横二列のグリッド */}
      <div className="grid grid-cols-2 gap-4">
        {jobs.map((job, index) => (
          <div
            className="relative cursor-pointer overflow-hidden rounded bg-white shadow"
            key={index}
            onClick={() => {
              setSelectedCard(selectedCard === index ? null : index);
              router.push('/purchase/payment_method/work/123456');
            }}
          >
            {/* オーバーレイ */}
            {selectedCard === index && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
                <p className="text-lg font-bold text-white">追加済</p>
              </div>
            )}

            {/* 画像 */}
            <div className="relative">
              <img alt="Job" className="h-40 w-full object-cover" src={job.image} />
              {/* タグ */}
              <p className="absolute bottom-2 left-2 rounded bg-white px-2 py-1 text-xs text-black">{job.tag}</p>
            </div>

            {/* 内容 */}
            <div className="p-4">
              {/* タイトル（2行トランケート） */}
              <h2 className="mt-2 line-clamp-2 text-base font-bold" title={job.title}>
                {job.title}
              </h2>

              {/* 時間・場所 */}
              <p className="mt-1 truncate text-sm text-gray-500">
                🕒 {job.time} <br />
                📍 {job.location}
              </p>

              {/* 給与とポイント */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-lg font-bold text-slate-800">{job.salary}</p>
                {job.points && <p className="rounded bg-blue-100 px-2 py-0.5 text-xs text-blue-500">{job.points}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
