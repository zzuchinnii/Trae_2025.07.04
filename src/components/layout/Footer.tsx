const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">關於我們</h3>
            <ul>
              <li><a href="/about" className="hover:text-pink-500">品牌故事</a></li>
              <li><a href="/contact" className="hover:text-pink-500">聯絡我們</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">顧客服務</h3>
            <ul>
              <li><a href="/faq" className="hover:text-pink-500">常見問題</a></li>
              <li><a href="/delivery" className="hover:text-pink-500">運送政策</a></li>
              <li><a href="/returns" className="hover:text-pink-500">退換貨須知</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">追蹤我們</h3>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <a href="#" className="hover:text-pink-500">FB</a>
              <a href="#" className="hover:text-pink-500">IG</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4">訂閱電子報</h3>
            <p>獲得最新花訊與獨家優惠。</p>
            <form className="mt-2">
              <input type="email" placeholder="您的電子郵件" className="w-full px-3 py-2 border rounded-md" />
              <button type="submit" className="w-full bg-pink-500 text-white px-3 py-2 mt-2 rounded-md hover:bg-pink-600">訂閱</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p>&copy; {new Date().getFullYear()} 花伴 Petaloom. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;