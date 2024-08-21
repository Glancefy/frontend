import { retrievePostsSample } from "@/lib/articleAPI";
import { useQuery } from "@tanstack/react-query";
import ArticleListItem from "@/components/mainPage/ArticleListItem";

function ArticleList() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: retrievePostsSample,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts?.map((post) => (
        <ArticleListItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ArticleList;
