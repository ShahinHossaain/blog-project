import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostListItem from "./PostListItem";
import { useLocation } from "react-router";

const fetchPost = async (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  location
) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/post?limit=10&sort=${
      location === "trending" ? "oldest" : "popular"
    }`
  );
  return res.data;
};

const PopularPost: React.FC = () => {
  const location = useLocation();
  const newLocation = location.pathname.replace("/", "");

  const { isPending, error, data } = useQuery({
    queryKey: ["posts", location],
    queryFn: () => fetchPost(newLocation),
  });
  return (
    <div className="">
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading posts!"
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10  ">
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              data.posts.map((post) => (
                <PostListItem key={post._id} post={post}></PostListItem>
              ))
            }
          </div>
        </>
      )}
    </div>
  );
};

export default PopularPost;
