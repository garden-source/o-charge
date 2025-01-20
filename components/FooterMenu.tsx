// components/FooterMenu.tsx
"use client";

import { CldImage } from "next-cloudinary";

const FooterMenu = () => {
  return (
    <nav className="bg-[#4b4a4d] p-4 max-w-screen-md mx-auto fixed bottom-0 left-0 right-0 z-50"> {/* パディングをp-4に増やし、高さをh-20 (5rem = 80px)に設定 */}
      <div className="flex justify-between">
        <div className="flex flex-col items-center flex-1 border-r border-gray-400 min-w-[50px]">
          <CldImage
            src="images/Other/qaint4gqgolot0nhxc2z"
            width={140}
            height={140}
            alt="メール"
            className="h-12 w-auto"
          />
        </div>
        <div className="flex flex-col items-center flex-1 border-r border-gray-400 min-w-[80px]">
          <CldImage
            src="images/Other/ylrehplbfz0t0iseeef0"
            width={140}
            height={140}
            alt="カカオトーク"
            className="h-12 w-auto"
          />
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[50px]">
          <CldImage
            src="images/Other/qydrrimsegmulyishjub"
            width={140}
            height={140}
            alt="LINE"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default FooterMenu;
