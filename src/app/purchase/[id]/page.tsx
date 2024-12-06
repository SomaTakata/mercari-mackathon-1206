import { ChevronRight } from 'lucide-react';
import React from 'react';

import Footer from './Fotter';
import Header from './Header';

const PaymentDetails: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 pb-[55px] pt-[60px]">
      <Header />
      {/* 商品情報 */}
      <div className="border-b border-gray-200 bg-white p-4">
        <div className="flex">
          <img alt="PRADA 二つ折り財布" className="size-16 rounded object-cover" src="/wallet.png" />
          <div className="ml-4 flex flex-col gap-2">
            <h2 className="text-md font-medium">PRADA 二つ折り財布 黒 レザー</h2>
            <div className="flex items-center gap-2">
              <p className="text-base font-bold text-slate-800 ">¥10,000</p>
              <p className="text-xs text-gray-600">送料込み</p>
            </div>
          </div>
        </div>
      </div>

      {/* 支払い詳細 */}
      <div className="bg-white">
        {/* あんしん鑑定 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="">
            <p className="text-sm font-semibold text-gray-700">あんしん鑑定</p>
            <p className="text-xs text-gray-500">鑑定手数料: ¥4,300</p>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500">利用しない</span>
            <ChevronRight className="size-6 text-gray-700" />
          </div>
        </div>

        {/* クーポン */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <p className="text-sm font-semibold  text-gray-700">クーポン</p>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">クーポンがあります</p>
            <ChevronRight className="size-6 text-gray-700" />
          </div>
        </div>

        {/* ポイントの使用 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-sm font-semibold  text-gray-700">ポイントの使用</p>
              <div className="flex items-center">
                <img alt="メルカリ" className="size-5" src="/mercari.png" />
                <p className="text-xs text-gray-700">P0</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700">P0</span>
            <ChevronRight className="size-6 text-gray-700" />
          </div>
        </div>

        {/* メルペイ残高の使用 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <p className="text-sm  font-semibold  text-gray-700">メルペイ残高の使用</p>
          <div className="flex items-center">
            <span className="text-sm text-gray-700">¥5,081</span>
            <ChevronRight className="size-6 text-gray-700" />
          </div>
        </div>

        {/* ビットコインの使用 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <p className="text-sm  font-semibold  text-gray-700">ビットコインの使用</p>
          <button className="rounded border border-red-500 px-2 py-1 text-xs font-semibold text-red-500">
            使用する
          </button>
        </div>

        {/* はたらくの使用 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <div className="flex items-center gap-2">
            <p className="rounded-md bg-red-600 px-2 py-0.5 text-xs font-bold text-white">new !</p>
            <p className="text-sm  font-semibold  text-gray-700">はたらく</p>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700">¥5,081</span>
            <ChevronRight className="size-6 text-gray-700" />
          </div>
        </div>

        {/* 支払い方法 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <p className="text-sm  font-semibold  text-gray-700">支払い方法</p>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img alt="Visa" className="size-8 object-cover" src="/viza.png" />
              <div className="flex whitespace-nowrap text-sm text-gray-700">
                <span className="flex items-center text-sm">**********</span>
                4205
              </div>
            </div>
            <ChevronRight className="size-6 text-gray-700" />
          </div>
        </div>

        {/* メルペイ残高の使用 */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <p className="text-sm  font-semibold  text-gray-700">支払金額</p>
          <span className="font-bold text-gray-700">¥5,081</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentDetails;
