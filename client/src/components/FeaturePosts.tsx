import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/post?featured=true&limit=4&sort=newest`
  );
  return res.data;
};

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div className="hidden  mt-8 lg:flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {posts[0].img && (
          <Image
            url={posts[0].img}
            className="w-full h-[400px] lg:h-[500px] object-fit rounded-3xl"
            // w="895"
          />
        )}
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="#" className="text-blue-800 lg:text-lg">
            {posts[0].category}
          </Link>
          <span className="text-gray-500">{format(posts[0].createdAt)}</span>
        </div>
        {/* title */}
        <Link
          to={posts[0].slug}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          {posts[0].title}
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        {posts[1] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            {posts[1].img && (
              <div className="w-1/3 aspect-video">
                <Image
                  url={posts[1].img}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[180px] xl:h-[210px] object-fit rounded-3xl"
                  w="298"
                />
              </div>
            )}
            {/* details and title */}
            <div className="w-2/3">
              {/* details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link to="#" className="text-blue-800">
                  {posts[1].category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {format(posts[1].createdAt)}
                </span>
              </div>
              {/* title */}
              <Link
                to={`/${posts[1].slug}`}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[1].title}
              </Link>

              <p className="my-4 w-[75%]">
                {posts[1]?.desc.split(" ").length > 12
                  ? posts[1]?.desc.split(" ").slice(0, 12).join(" ") + "..."
                  : posts[1]?.desc}
              </p>
            </div>
          </div>
        )}
        {/* third */}
        {posts[2] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            {posts[2].img && (
              <div className="w-1/3 aspect-video">
                <Image
                  url={posts[2].img}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[180px] xl:h-[210px] object-fit rounded-3xl"
                  w="298"
                />
              </div>
            )}
            {/* details and title */}
            <div className="w-2/3">
              {/* details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link to="#" className="text-blue-800">
                  {posts[2].category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {format(posts[2].createdAt)}
                </span>
              </div>
              {/* title */}
              <Link
                to={`/${posts[2].slug}`}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[2].title}
              </Link>

              <p className="my-4 w-[75%]">
                {posts[2]?.desc.split(" ").length > 12
                  ? posts[2]?.desc.split(" ").slice(0, 12).join(" ") + "..."
                  : posts[2]?.desc}
              </p>
            </div>
          </div>
        )}
        {/* fourth */}
        {posts[3] && (
          <div className="lg:h-1/3 flex justify-between gap-4">
            {posts[3].img && (
              <div className="w-1/3 aspect-video">
                <Image
                  url={posts[3].img}
                  className="w-full h-[200px] sm:h-[300px] lg:h-[180px] xl:h-[210px] object-fit rounded-3xl"
                  w="298"
                />
              </div>
            )}
            {/* details and title */}
            <div className="w-2/3">
              {/* details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02.</h1>
                <Link to="#" className="text-blue-800">
                  {posts[3].category}
                </Link>
                <span className="text-gray-500 text-sm">
                  {format(posts[3].createdAt)}
                </span>
              </div>
              {/* title */}
              <Link
                to={posts[3].slug}
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                {posts[3].title}
              </Link>
              <p className="my-4 w-[75%]">
                {posts[3]?.desc.split(" ").length > 12
                  ? posts[3]?.desc.split(" ").slice(0, 12).join(" ") + "..."
                  : posts[3]?.desc}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;
