import { Heart, MessageSquare, DollarSign, Copy } from 'lucide-react';
import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <div className="h-full bg-white pb-48">
      {/* 商品画像 */}
      <div className="text-center">
        <img alt="商品画像" className="w-full" src="/wallet.png" />
      </div>

      {/* 商品情報 */}
      <div className="mt-4 p-4">
        <h2 className="text-lg font-semibold">✨美品✨ PRADA 三角プレート 二つ折り財布</h2>
        <p className="mt-2 text-4xl font-medium text-slate-800">¥8,480</p>
      </div>

      {/* サブ情報 */}
      <div className="flex flex-col gap-2 px-4">
        <div className="text-md text-gray-700">
          メルカリの分割払いなら
          <span className="font-bold">月々 ¥2,897 ~ × 3</span>
        </div>
        <div className="w-fit bg-blue-100 px-2 py-0.5 text-gray-700">
          メルペイ残高は <span className="font-bold">¥5,081</span> をお持ちです
        </div>

        {/* ボタン群 */}
        <div className="mt-3 flex w-full gap-3 overflow-x-scroll">
          {/* いいねボタン */}
          <div className="flex items-center gap-2 whitespace-nowrap rounded-md border px-4 py-2">
            <Heart className="size-5" />
            <span className="text-sm">5</span>
          </div>

          {/* コメントボタン */}
          <div className="flex items-center gap-2 whitespace-nowrap rounded-md border px-4 py-2">
            <MessageSquare className="size-5" />
            <span className="text-sm">コメント</span>
          </div>

          {/* 希望価格ボタン */}
          <div className="flex items-center gap-2 whitespace-nowrap rounded-md border px-4 py-2">
            <DollarSign className="size-5" />
            <span className="text-sm">希望価格</span>
          </div>

          {/* コピー出品ボタン */}
          <div className="flex items-center gap-2 whitespace-nowrap rounded-md border px-4 py-2">
            <Copy className="size-5" />
            <span className="text-sm">コピー出品</span>
          </div>

          {/* シェアボタン */}
          <div className="flex items-center gap-2 whitespace-nowrap rounded-md border px-4 py-2">
            <Copy className="size-5" />
            <span className="text-sm">シェア</span>
          </div>

          {/* 保存ボタン */}
          <div className="flex items-center gap-2 whitespace-nowrap rounded-md border px-4 py-2">
            <Heart className="size-5" />
            <span className="text-sm">保存</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
