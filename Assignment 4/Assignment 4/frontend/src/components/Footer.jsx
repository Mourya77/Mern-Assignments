const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white">
      {/* Top Footer Content */}
      <div className="p-4 text-center">
        <p>&copy; 2025 My Store. Follow us on social media.</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
        </div>
      </div>

      {/* Bottom Right Signature */}
      <div className="bg-emerald-700 py-2 px-4">
        <p className="text-sm font-bold algerian text-right">
          Made by <span className="text-xl font-bold algerian">G.Mourya</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
