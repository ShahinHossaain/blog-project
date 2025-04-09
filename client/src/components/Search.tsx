import { FaSearch } from "react-icons/fa";

const Search: React.FC = () => {
  return (
    <div className="">
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <FaSearch />
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default Search;
