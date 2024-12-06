import { ChevronLeft, Heart } from 'lucide-react';
import React from 'react';

const JobDetail: React.FC = () => {
  return (
    <div className="bg-gray-100 pb-20">
      {/* ヘッダー */}
      <header className="flex items-center border-b border-gray-200 bg-white px-4 py-3">
        <button className="text-black">
          <ChevronLeft className="size-6" />
        </button>
        <h1 className="flex-1 text-center text-lg font-bold">12月6日 (金)</h1>
      </header>

      {/* メイン画像 */}
      <div className="relative">
        <img alt="Job Main" className="h-64 w-full object-cover" src="/user1.png" />
        <div className="absolute bottom-2 left-2 flex gap-4">
          <div className="rounded bg-blue-400 px-2 py-1 text-xs text-white">募集人数 7/10人</div>
          <div className=" rounded bg-white px-2 py-1 text-xs text-black">未経験者歓迎</div>
        </div>
        <div className="absolute bottom-2 right-3 flex items-center rounded-lg bg-slate-200 px-2 py-1 text-gray-500">
          <Heart className="size-4" />
          <span className="ml-1">5</span>
        </div>
      </div>

      {/* タイトルと詳細 */}
      <div className="bg-white p-4 pt-6">
        <h2 className="text-lg font-bold">
          今なら給与500円UP中！！9/1より他社スキマバイト経験者も勤務OKになりました✨ 車通勤OK//荷物の仕分け📗ヤマト運輸
          埼玉ベース
        </h2>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-gray-600">物流・倉庫（港湾運送業務を除く） / 物流・倉庫（港湾運送業務を除く）</p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            <span className="font-bold">📅 12/6 (金) 17:00 - 22:00</span> 5時間
          </p>
          <p className="mt-2 text-sm text-gray-700">📍 埼玉県上尾市</p>
        </div>
        <div className="mt-2 flex w-full  justify-end">
          <p className="text-4xl font-bold text-slate-800 ">￥3000</p>
        </div>
        <div className="bg-white p-4">
          <div className="mb-6 mt-3 w-full border" />

          {/* 仕事内容 */}
          <section className="mb-6">
            <h2 className="mb-2 text-lg font-bold">仕事内容</h2>
            <p className="text-gray-700">
              今ならなんと！＼給与500円UP中！！／✨✨
              <br />
              それに加えて・・・
            </p>
            <p className="mt-4 font-bold text-gray-700">【最大12,000ポイントもらえるCPN実施中！※条件あり】</p>
            <p className="text-gray-700">期間限定！最大12,000Pのメルカリポイント </p>
          </section>

          {/* 待遇 */}
          <section>
            <h2 className="mb-2 text-lg font-bold">待遇</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>未経験者歓迎</li>
              <li>駐車場あり</li>
              <li>駐輪場あり</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
