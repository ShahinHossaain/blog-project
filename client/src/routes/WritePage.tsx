import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Upload from "../components/Upload";
import axios from "axios";
import Image from "../components/Image";

// Define the type of your data
interface PostData {
  img: string;
  title: string;
  category: string;
  desc: string;
  content: string;
}

const WritePage: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState<string>("");
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost: PostData) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/post`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post created successfully!");
      navigate(`/${res.data.slug}`, { replace: true });
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      img: cover?.filePath || "",
      title: (formData.get("title") as string) || "",
      category: (formData.get("category") as string) || "",
      isFeatured: false,
      desc: (formData.get("desc") as string) || "",
      content: value || "",
    };

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <div className="flex items-center gap-4">
          <div>
            <Upload type="image" setProgress={setProgress} setData={setCover}>
              <div className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
                Add a cover image
              </div>
            </Upload>
            <p
              className={
                progress ? "block text-sm text-gray-500 m-3" : "hidden"
              }
            >
              {" "}
              {"Progress: " + progress + "%"}
            </p>
          </div>
          <div>
            {cover && (
              <Image
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                url={cover.name}
                className="h-[100px] w-[100px] rounded-md"
              />
            )}
          </div>
        </div>

        <input
          className="text-4xl font-semibold outline-none p-5 rounded-xl"
          type="text"
          placeholder="Write Title"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        ></textarea>
        <div className="flex flex-1">
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 > progress || progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || 0 > progress || progress < 100}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
};

export default WritePage;
