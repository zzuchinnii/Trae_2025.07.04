import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">花伴 Petaloom</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="text-gray-800 hover:text-pink-500">智能選花</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Link href="/quiz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">心意測驗找花</Link>
                <Link href="/occasions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">依場合選花</Link>
                <Link href="/styles" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">依風格選花</Link>
                <Link href="/ai-choice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">讓AI為您推薦</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-800 hover:text-pink-500">所有花禮</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Link href="/collections" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">主題系列</Link>
                <Link href="/flowers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">依主花材</Link>
                <Link href="/colors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">依色系</Link>
                <Link href="/custom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100">客製化專區</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-800">中/EN</button>
            <Link href="/login" className="text-gray-800">&#x1F464;</Link> {/* User Icon */}
            <Link href="/cart" className="text-gray-800">&#x1F6D2;</Link> {/* Cart Icon */}
            <button className="text-gray-800">&#x1F50D;</button> {/* Search Icon */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;