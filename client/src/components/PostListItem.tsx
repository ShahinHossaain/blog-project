import { Link } from "react-router";
import Image from "./Image";
import { format } from "timeago.js";
import { PostType } from "../typeScriptCode/postType.ts";

type PostListItemProps = {
  post: PostType;
};

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* Image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-2/5 h-[300px] xl:h-[410px]">
          <Image
            url={post.img}
            className="rounded-2xl object-fit w-full xl:w-[510px] h-full "
            // w="735"
          />
        </div>
      )}

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link
            className="text-blue-800"
            to={`/post?author=${post.user.username}`}
          >
            {post.user.username}
          </Link>
          <span>on</span>
          <Link to="#" className="text-blue-800">
            {post.category}
          </Link>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>

        <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
