import { FiSearch, FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 text-white flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="text-xl font-bold algerian">My Store</div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded overflow-hidden px-2 py-1 w-full md:w-1/3">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          className="ml-2 flex-grow outline-none text-black"
        />
      </div>

      {/* Nav Links + Profile */}
      <div className="flex items-center space-x-6">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-xl font-bold algerian">Home</a></li>
          <li><a href="#" className="text-xl font-bold algerian">Products</a></li>        </ul>
        {/* Profile Icon */}
        <FiUser className="text-white text-xl hover:text-gray-300 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
