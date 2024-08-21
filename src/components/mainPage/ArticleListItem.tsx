import React from "react";
import { Post } from "@/types";

interface ArticleListItemProps {
  post: Post;
}
function ArticleListItem({ post }: ArticleListItemProps) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default ArticleListItem;
