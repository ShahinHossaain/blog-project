import { useInfiniteQuery } from "@tanstack/react-query";
import PostListItem from "./PostListItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router";

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObject = Object.fromEntries([...searchParams]);
  console.log("11111", searchParamsObject);

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/post`, {
    params: { page: pageParam, limit: 5, ...searchParamsObject },
  });
  return res.data;
};
const PostList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, error, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["post", searchParams.toString()],
      queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        lastPage.hasMore ? pages.length + 1 : undefined,
    });

  console.log("222222", data);

  // if (isFetching) return "Loading.........";
  if (error) return "Something went wrong!";

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];
  return (
    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p>
          <b>All posts loaded</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
