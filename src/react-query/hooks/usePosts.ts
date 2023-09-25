import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = (userId: number | undefined) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: userId,
        },
      })
      .then((res) => res.data);

  // /users/1/posts
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: fetchPosts,
    staleTime: 10 * 1000, // 10s
  });
};

export default usePosts;
