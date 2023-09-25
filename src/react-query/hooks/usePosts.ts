import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (userId: number | undefined, query: PostQuery) => {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          userId: userId,
          _start: (query.page - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  // /users/1/posts
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts", query] : ["posts", query],
    queryFn: fetchPosts,
    staleTime: 10 * 1000, // 10s
    keepPreviousData: true,
  });
};

export default usePosts;
