// components/FooterMenu.tsx
const FooterMenu = () => {
  return (
    <nav className="bg-[#4b4a4d] p-3 max-w-screen-md mx-auto fixed bottom-0 left-0 right-0 z-50">
      <div className="flex justify-between space-x-4 px-4">
        <div className="flex flex-col items-center flex-1 border-r border-gray-300 min-w-[150px]">
          <img src="/images/Other/mail-icon.png" alt="メール" className="h-10 w-auto" />
        </div>
        <div className="flex flex-col items-center flex-1 border-r border-gray-300 min-w-[150px]">
          <img src="/images/Other/kakao-icon.png" alt="カカオトーク" className="h-10 w-auto" />
        </div>
        <div className="flex flex-col items-center flex-1 min-w-[150px]">
          <img src="/images/Other/line-icon.png" alt="LINE" className="h-10 w-auto" />
        </div>
      </div>
    </nav>
  );
};

export default FooterMenu;
