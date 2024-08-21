import { retrievePosts } from "./ArticleAPI";
import { useQuery } from "@tanstack/react-query";

function ArticleList() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: retrievePosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default ArticleList;
