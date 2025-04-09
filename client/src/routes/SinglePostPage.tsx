import { Link } from "react-router";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-8">
        {/* detail */}
        <div className="flex gap-8">
          <div className="lg:w-3/5 flex flex-col gap-8">
            <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              modi eum aut.
            </h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Written by</span>
              <Link to="#">John Doe</Link>
              <span>on</span>
              <Link to="#">Web Design</Link>
              <span>2 days ago</span>
            </div>
            <p className="text-gray-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ducimus repudiandae totam harum molestiae sit?
            </p>
          </div>
          <div className="hidden lg:block w-2/5 h-full">
            <Image
              url="blog1"
              className="object-cover w-full h-full rounded-xl"
              w="600"
            />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* text */}
          <div className="lg:text-lg flex flex-col gap-6 text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              laudantium repellendus nemo tenetur? Architecto nihil assumenda
              dicta! Ad labore aliquam eaque doloribus iste deserunt dolores ab
              consequuntur aut repudiandae magni, excepturi reiciendis! Repellat
              iusto veniam cumque beatae. Officiis laborum facere nobis enim
              voluptates numquam possimus animi deleniti amet qui, ullam
              adipisci repellat, eos, aperiam vel nulla veniam eligendi iure
              totam quo architecto. Hic cum sint quia alias ipsa placeat nisi
              blanditiis. Neque deserunt distinctio possimus iure molestias
              consectetur architecto doloribus, quaerat non et suscipit unde
              exercitationem. Placeat dicta modi assumenda! Reiciendis
              laudantium perspiciatis suscipit debitis quas itaque a omnis.
            </p>
          </div>
          {/* menu */}
          <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium">Author</h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <Image
                  url="blog1"
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                  alt="User Avatar"
                />
                {/* Name */}
                <Link to="#" className="font-semibold text-blue-800">
                  John Doe
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              {/* Social Links */}
              <div className="flex gap-2">
                <Link to="#">
                  <Image url="blog1" className="w-6 h-6" alt="Facebook Icon" />
                </Link>
                <Link to="#">
                  <Image url="blog1" className="w-6 h-6" alt="Facebook Icon" />
                </Link>
              </div>
            </div>
            <PostMenuActions />
            <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-4">
              {/* Categories */}
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/" className="underline">
                  All
                </Link>
                <Link to="/" className="underline">
                  Web Design
                </Link>
                <Link to="/" className="underline">
                  Development
                </Link>
                <Link to="/" className="underline">
                  Databases
                </Link>
                <Link to="/" className="underline">
                  Search Engines
                </Link>
                <Link to="/" className="underline">
                  Marketing
                </Link>
              </div>

              {/* Search */}
              <h1 className="mt-8 mb-3 text-sm font-medium">Search</h1>
              <Search />
            </div>
          </div>
        </div>
      </div>
      <Comments />

      {/* Related Posts */}
    </div>
  );
};

export default SinglePostPage;
