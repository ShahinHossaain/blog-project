import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import { useLocation } from "react-router";

const PostListPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams
    .get("cat")
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="">
      <div className="">
        <h1 className="mb-8 text-2xl">{category} Blog</h1>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
        >
          {open ? "Close" : "Filter or Search"}
        </button>
        <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
          <div className="">
            <PostList />
          </div>
          <div className={`${open ? "block" : "hidden"} md:block`}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
