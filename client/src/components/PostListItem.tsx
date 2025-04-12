import { Link } from "react-router";
import Image from "./Image";
import { format } from "timeago.js";

interface ImageProps {
  // src: string;
}
const PostListItem: React.FC<ImageProps> = ({ post }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* Image */}
      {post.img && (
        <div className="md:hidden xl:block xl:w-2/5 h-[300px]">
          <Image
            url={post.img}
            className="rounded-2xl object-cover w-full h-full "
            w="735"
          />
        </div>
      )}

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-3/5">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
          {post.title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <a href="#" className="text-blue-800">
            {post?.user?.username}
          </a>
          <span>|</span>
          <a href="#" className="text-blue-800">
            {post.category}
          </a>
          <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`${post.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
