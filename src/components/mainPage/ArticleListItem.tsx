import { Post } from "@/types";

interface ArticleListItemProps {
  post: Post;
}

// export interface Post {
//   id: number;
//   title: string;
//   body: string;
//   date: string;
//   source: string;
//   reports: number;
// }

function ArticleListItem({ post }: ArticleListItemProps) {
  const handleOnClick = () => {
    console.log(post.title);
  };
  const handleAnalysis = () => {
    console.log("Analyzing...");
  };

  return (
    <div
      className="flex flex-col space-y-4 p-4 bg-white rounded-sm shadow-md dark:bg-gray-800"
      key={post.id}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-2 items-center">
          <h2
            className="text-lg font-semibold
          hover:cursor-pointer hover:text-slate-700 dark:hover:text-slate-300
          "
            onClick={handleOnClick}
          >
            {post.title}
          </h2>
          {/* next to tile is a clickable span text "analyze" with a cool icon on its right */}
          <span
            className="text-sm text-blue-500 select-none
          hover:cursor-pointer hover:text-blue-700 dark:hover:text-blue-300"
            onClick={handleAnalysis}
          >
            analyze
            <span className="ml-1">📊</span>
          </span>
        </div>
        <span className="text-sm text-gray-400">{post.date}</span>
      </div>
      <p className="text-sm">{post.body}</p>
      <div className="flex flex-row justify-between items-center">
        <span
          className="text-sm text-gray-400 select-none
        hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-300"
        >
          {post.source}
        </span>
        <span className="text-sm text-gray-400 select-none">
          {post.reports} reports
        </span>
      </div>
    </div>
  );
}

export default ArticleListItem;
