import React from "react";
import { Home, Heart, Upload, CreditCard, User } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex-col w-full flex items-center bg-white  border-gray-300">
      {/* 下部に固定するボタン */}
      <div className="w-full">
        <div className="w-full flex gap-4 bg-white p-4 border-t">
          <button className="flex-1 border-2 border-red-500 text-red-500 py-3 rounded-md font-semibold">
            分割払いで購入
          </button>
          <button className="flex-1 bg-red-500 text-white py-3 rounded-md font-semibold">
            購入手続きへ
          </button>
        </div>
        <div className="flex justify-around w-full py-4 pb-8 border-t">
          <div className="flex flex-col items-center text-center gap-1">
            <Home className="w-6 h-6" />
            <span className="text-xs">ホーム</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <Heart className="w-6 h-6" />
            <span className="text-xs">いいね！</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <Upload className="w-6 h-6" />
            <span className="text-xs">出品</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <CreditCard className="w-6 h-6" />
            <span className="text-xs">支払い</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <User className="w-6 h-6" />
            <span className="text-xs">マイページ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
