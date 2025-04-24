import { useAuth, useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostListItem from "../components/PostListItem"; // Adjust path as needed

const SavedPosts: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();

  // Step 1: Get saved post IDs
  const {
    isPending: isLoadingPosts,
    error: postsError,
    data: savedPostsData,
  } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/saved`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data; // ✅ Should return array of post IDs
    },
  });

  // Step 2: Get full posts for each saved ID
  // const {
  //   data: savedPostsData,
  //   isPending: isLoadingPosts,
  //   error: postsError,
  // } = useQuery({
  //   queryKey: ["savedPostDetails", savedPostIds],
  //   queryFn: async () => {
  //     if (!savedPostIds || savedPostIds.length === 0) return [];
  //     const posts = await Promise.all(
  //       savedPostIds.map((postId: string) =>
  //         axios
  //           .get(`${import.meta.env.VITE_API_URL}/post/item/${postId}`)
  //           .then((res) => res.data)
  //       )
  //     );
  //     console.log("***", posts);
  //     return posts;
  //   },
  //   enabled: !!savedPostIds,
  // });

  // Step 3: Auth checks
  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>You should login!</div>;

  // Step 4: Render
  return (
    <div>
      {isLoadingPosts ? (
        "Loading posts..."
      ) : postsError ? (
        "Error loading posts!"
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10  ">
          {!Array.isArray(savedPostsData) || savedPostsData.length === 0 ? (
            <p>No saved posts found.</p>
          ) : (
            savedPostsData?.map(
              (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                post
              ) => <PostListItem key={post._id} post={post}></PostListItem>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SavedPosts;
