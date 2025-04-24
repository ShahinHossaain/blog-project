import axios from "axios";
import Comment from "./Comment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId: string) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }: { postId: string }) => {
  const { user } = useUser();
  const { getToken } = useAuth();

  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          error.response?.data ||
          "Something went wrong";

        toast.error(String(message));
      } else {
        toast.error("Unexpected error occurred");
      }
    },
  });

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   const data = {
  //     desc: formData.get("desc"),
  //   };

  //   mutation.mutate(data);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      desc: formData.get("desc"),
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 my-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 w-full bg-white p-4 rounded-2xl shadow-md border border-gray-200"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full h-28 sm:h-auto p-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Send
        </button>
      </form>

      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                desc: `${mutation.variables.desc} (Sending...)`,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                createdAt: new Date(),
                user: {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  img: user.imageUrl,
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  username: user.username,
                },
              }}
            />
          )}

          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            data.map((comment) => (
              <Comment key={comment._id} comment={comment} postId={postId} />
            ))
          }
        </>
      )}
    </div>
  );
};

export default Comments;
