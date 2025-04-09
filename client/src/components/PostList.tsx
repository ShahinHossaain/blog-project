import { useQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/post`);
  return res.data;
};
const PostList: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostListItem src="animate.png" />
      <PostListItem src="blog1" />
      <PostListItem src="animate.png" />
      <PostListItem src="animate.png" />
      <PostListItem src="animate.png" />
    </div>
  );
};

export default PostList;
