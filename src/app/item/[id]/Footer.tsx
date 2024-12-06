'use client';
import { Home, Heart, Upload, CreditCard, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className="fixed bottom-0 left-0 flex w-full flex-col items-center border-gray-300  bg-white">
      {/* 下部に固定するボタン */}
      <div className="w-full">
        <div className="flex w-full gap-4 border-t bg-white p-4">
          <button
            className="flex-1 rounded-md border-2 border-red-500 py-3 font-semibold text-red-500"
            onClick={() => router.push('/purchase/123456')}
          >
            分割払いで購入
          </button>
          <button
            className="flex-1 rounded-md bg-red-500 py-3 font-semibold text-white"
            onClick={() => router.push('/purchase/123456')}
          >
            購入手続きへ
          </button>
        </div>
        <div className="flex w-full justify-around border-t py-4 pb-8">
          <div className="flex flex-col items-center gap-1 text-center">
            <Home className="size-6" />
            <span className="text-xs">ホーム</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <Heart className="size-6" />
            <span className="text-xs">いいね！</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <Upload className="size-6" />
            <span className="text-xs">出品</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <CreditCard className="size-6" />
            <span className="text-xs">支払い</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <User className="size-6" />
            <span className="text-xs">マイページ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
