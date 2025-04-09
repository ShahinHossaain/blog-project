import { Link } from "react-router";
import Image from "./Image";

interface ImageProps {
  src: string;
}
const PostListItem: React.FC<ImageProps> = ({ src }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Image */}
      <div className="md:hidden xl:block xl:w-2/5 h-[300px]">
        <Image
          url={src}
          className="rounded-2xl object-cover w-full h-full "
          w="735"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-3/5">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
          similique.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <a href="#" className="text-blue-800">
            John Doe
          </a>
          <span>|</span>
          <a href="#" className="text-blue-800">
            Web Design
          </a>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          nesciunt praesentium repellendus porro cum dolore magnam dolores quae
          voluptas eos!
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
