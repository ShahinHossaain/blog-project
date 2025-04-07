import PostListItem from "./PostListItem";

const PostList: React.FC = () => {
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
