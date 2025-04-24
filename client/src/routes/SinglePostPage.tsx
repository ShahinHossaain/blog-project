import { Link, useNavigate, useParams } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import axios, { AxiosError } from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { format } from "timeago.js";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchPost = async (slug: string) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/post/${slug}`);
  return res.data;
};

const SinglePostPage: React.FC = () => {
  const { slug } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug!),
  });

  const { user } = useUser();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const saveMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.patch(
        `${import.meta.env.VITE_API_URL}/users/save`,
        {
          postId: data._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedPosts"] });
    },
    onError: (error: AxiosError) => {
      if (error.response) {
        toast.error(error.response.data as string);
      } else {
        toast.error("Something went wrong!");
      }
    },
  });

  const handleSave = () => {
    if (!user) {
      return navigate("/login");
    }
    saveMutation.mutate();
  };

  const { data: savedPosts } = useQuery({
    queryKey: ["savedPosts"],
    queryFn: async () => {
      const token = await getToken();
      return axios.get(`${import.meta.env.VITE_API_URL}/users/saved2`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  // console.log("%%%", data, savedPosts);

  const isSaved = savedPosts?.data?.some((p: string) => p == data?._id) || 0;

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";

  return (
    <div className="flex gap-8">
      <div className="flex flex-col  ">
        {/* content head  */}
        <div className="flex gap-8">
          <div className="lg:w-3/5 flex flex-col gap-4">
            <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
              {data.title}
            </h1>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Written by</span>
              <Link
                to={`/post?author=${data.user.username}`}
                className="text-blue-800"
              >
                {data.user.username}
              </Link>
              <span>on</span>
              <Link to="#" className="text-blue-800">
                {data.category}
              </Link>
              <span>{format(data.createdAt)}</span>
            </div>
            <p className="text-gray-500 font-medium">{data.desc}</p>
            <div className="flex gap-4 mt-6 flex-wrap items-center">
              {/* Home button for small screens */}

              <button
                onClick={handleSave}
                className="px-3 py-1.5 text-sm lg:px-5 lg:py-2 lg:text-base bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                {isSaved ? "Blog saved" : "Save this Blog"}
              </button>
              <Link to="/post">
                <button className="px-3 py-1.5 text-sm lg:px-5 lg:py-2 lg:text-base border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  See more post
                </button>
              </Link>
              <Link to="/">
                <button className="block lg:hidden px-3 py-1.5 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
                  Go Home
                </button>
              </Link>
            </div>
          </div>
          {data.img && (
            <div className="hidden lg:block w-2/5 h-72 ">
              <Image
                url={data.img}
                w="600"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}
        </div>
        {/* content body  */}
        <div
          className="lg:text-lg flex flex-col gap-6 text-justify mt-10 lg:mt-0 "
          dangerouslySetInnerHTML={{ __html: data.content }}
        ></div>
        <Comments postId={data._id} />
      </div>

      {/* menu */}
      <div className="hidden lg:block px-4 h-max sticky top-8">
        <h1 className="mb-4 text-sm font-medium">Author</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            {data.user.img && (
              <Image
                url={data.user.img}
                className="w-12 h-12 rounded-full object-fit"
                w="48"
                h="48"
              />
            )}
            <Link to="#" className="text-blue-800">
              {data.user.username}
            </Link>
          </div>
          <p className="text-sm text-gray-500">Increase connection</p>
          <div className="flex gap-2">
            <Link to="#">
              <CiFacebook className="text-2xl text-blue-800" />
            </Link>
            <Link to="#">
              <FaInstagramSquare className="text-2xl text-[#E1306C]" />
            </Link>
          </div>
        </div>
        <PostMenuActions post={data} />
        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>

        <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to="/post">
            All
          </Link>
          <Link className="underline" to="/post?cat=web-design">
            Web Design
          </Link>
          <Link className="underline" to="/post?cat=development">
            Development
          </Link>
          <Link className="underline" to="/post?cat=databases">
            Databases
          </Link>
          <Link className="underline" to="/post?cat=seo">
            Search Engines
          </Link>
          <Link className="underline" to="/post?cat=marketing">
            Marketing
          </Link>
        </div>
        <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
        <Search />
      </div>
    </div>
  );
};

export default SinglePostPage;
