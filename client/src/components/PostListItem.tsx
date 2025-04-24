import { Link } from "react-router";
import Image from "./Image";
import { format } from "timeago.js";
import { PostType } from "../typeScriptCode/postType.ts";

type PostListItemProps = {
  post: PostType;
};

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <div className="max-w-md mx-auto bg-[#e6e6ff] border border-gray-300 rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      <div className="h-72 overflow-hidden">
        <Image
          url={post.img}
          className="w-full h-full object-cover lg:transition-transform lg:duration-300 lg:hover:scale-105 rounded-lg"
        />
      </div>
      <div className="p-5 text-center">
        <Link
          to={`/post?cat=${post.category}`}
          className="block text-sm text-gray-600 underline cursor-pointer m-5"
        >
          {post.category}{" "}
        </Link>
        <Link
          to={`/${post.slug}`}
          className="block text-lg font-semibold text-gray-900 mb-2"
        >
          {post.title}{" "}
        </Link>
        <p className="mb-4">
          {post.desc.split(" ").length > 12
            ? post.desc.split(" ").slice(0, 12).join(" ") + "..."
            : post.desc}
        </p>
        <div className="text-xs text-gray-500 flex justify-center gap-2">
          <span>Written by</span>
          <Link
            className="text-blue-800"
            to={`/post?author=${post.user.username}`}
          >
            {post.user.username}
          </Link>
          <span>on</span>

          <span>{format(post.createdAt)}</span>
        </div>
        <Link
          to={`/${post.slug}`}
          className="block my-5 underline text-blue-800 text-sm"
        >
          Read More{" "}
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
