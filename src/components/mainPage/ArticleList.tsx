import ArticleListItem from "@/components/mainPage/ArticleListItem";
import { Posts } from "@/types";
import ArticleListOptions from "./ArticleListOptions";

interface ArticleListProps {
  posts?: Posts;
}

function ArticleList({ posts }: ArticleListProps) {
  return (
    <div className="flex flex-col lg:w-1/2 min-h-fit space-y-4 md:w-3/5 w-full">
      <ArticleListOptions />
      {posts?.map((post) => (
        <ArticleListItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ArticleList;
