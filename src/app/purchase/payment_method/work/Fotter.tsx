import React from 'react';

const Footer: React.FC = () => {
  // サンプルデータ
  const currentTotal = 10000; // 現在の合計金額（例: ¥10,000）
  const jobEarnings = 5000; // アルバイトで得られる金額（例: ¥5,000）

  return (
    <footer className="fixed bottom-0 left-0 z-50 flex w-full flex-col items-center justify-between gap-3 border-t border-gray-200  bg-white p-4">
      {/* 現在の合計金額 */}
      <div className="flex gap-4">
        <div className="text-sm font-bold text-gray-700">
          現在の差額:
          <span className="pl-2 text-xl text-blue-600">¥{currentTotal.toLocaleString()}</span>
        </div>

        {/* アルバイトの収益 */}
        <div className="text-sm font-bold text-gray-700">
          アルバイト収益:
          <span className="pl-2 text-xl text-green-600">¥{jobEarnings.toLocaleString()}</span>
        </div>
      </div>
      <button className="w-full flex-1 rounded-md bg-red-500 py-3 font-semibold text-white">設定する</button>
    </footer>
  );
};

export default Footer;
