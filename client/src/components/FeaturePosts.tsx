import { Link } from "react-router";
import Image from "./Image";

const FeaturePosts: React.FC = () => {
  return (
    <div className="">
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* First */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* image */}
          <Image url="blog1" className="rounded-3xl object-cover" />
          {/* details */}
          <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link to="/" className="text-blue-800 lg:text-lg">
              Web Design
            </Link>
            <span className="text-gray-500">2 days ago</span>
          </div>
          {/* title */}
          <Link
            to="/test"
            className="text-xl lg:text-3xl font-semibold lg:font-bold"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Link>
        </div>
        {/* Others */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {/* Second Post */}
          <div className="lg:h-1/3 flex justify-between gap-4">
            <Image
              url="blog1"
              className="rounded-3xl object-cover w-1/3 aspect-video"
            />
            <div className="w-2/3">
              {/* Details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02</h1>
                <Link to="#" className="text-blue-800">
                  Web Design
                </Link>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              {/* Title */}
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
          <div className="lg:h-1/3 flex justify-between gap-4">
            <Image
              url="blog1"
              className="rounded-3xl object-cover w-1/3 aspect-video"
            />
            <div className="w-2/3">
              {/* Details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02</h1>
                <Link to="#" className="text-blue-800">
                  Web Design
                </Link>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              {/* Title */}
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
          <div className="lg:h-1/3 flex justify-between gap-4">
            <Image
              url="blog1"
              className="rounded-3xl object-cover w-1/3 aspect-video"
              w="100"
            />
            <div className="w-2/3">
              {/* Details */}
              <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                <h1 className="font-semibold">02</h1>
                <Link to="#" className="text-blue-800">
                  Web Design
                </Link>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              {/* Title */}
              <Link
                to="/test"
                className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePosts;
