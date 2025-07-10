import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-neutral-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200">
            <Link href="/">花伴 Petaloom</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">智能選花</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Link href="/quiz" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 first:rounded-t-lg">心意測驗找花</Link>
                <Link href="/occasions" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">依場合選花</Link>
                <Link href="/styles" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">依風格選花</Link>
                <Link href="/ai-choice" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 last:rounded-b-lg">讓AI為您推薦</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-neutral-700 hover:text-primary-600 font-medium transition-colors duration-200">所有花禮</button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Link href="/collections" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 first:rounded-t-lg">主題系列</Link>
                <Link href="/flowers" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">依主花材</Link>
                <Link href="/colors" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200">依色系</Link>
                <Link href="/custom" className="block px-4 py-3 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 last:rounded-b-lg">客製化專區</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-neutral-100">繁中/EN</button>
            <Link href="/login" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 p-2 rounded-md hover:bg-neutral-100">&#x1F464;</Link> {/* User Icon */}
            <Link href="/cart" className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 p-2 rounded-md hover:bg-neutral-100">&#x1F6D2;</Link> {/* Cart Icon */}
            <button className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 p-2 rounded-md hover:bg-neutral-100">&#x1F50D;</button> {/* Search Icon */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;