import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostListItem from "../components/PostListItem";
import { useUser } from "@clerk/clerk-react";

const fetchPost = async (username: string) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/post/?author=${username}`
  );
  return res.data;
};

const MyPost: React.FC = () => {
  const { user } = useUser();

  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetchPost(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        user.username!
      ),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

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

export default MyPost;
