import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Search from "./Search";
const MainCategories: React.FC = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/post"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/post?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/post?cat=development"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to="/post?cat=databases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Databases
        </Link>
        <Link
          to="/post?cat=seo"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/post?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* Search */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <Search />
      </div>
    </div>
  );
};

export default MainCategories;
