import ArticleList from "./ArticleList";
import Stats from "./Stats";
import TrendingTopicsList from "./TrendingTopicsList";
import {
  retrievePostsSample,
  retrieveTrendingTopicsSample,
} from "@/lib/articleAPI";
import { useQuery } from "@tanstack/react-query";

function MainPage() {
  const {
    data: postsData,
    error: postsError,
    isLoading: isLoadingPosts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: retrievePostsSample,
  });

  const {
    data: trendingTopics,
    error: topicsError,
    isLoading: isLoadingTopics,
  } = useQuery({
    queryKey: ["trendingTopics"],
    queryFn: retrieveTrendingTopicsSample,
  });

  return isLoadingPosts || isLoadingTopics ? (
    // make a nice loading animation
    <div
      className="flex items-center justify-center"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-500"></div>
    </div>
  ) : postsError || topicsError ? (
    <div className="flex items-center justify-center h-64 text-red-500">
      {postsError && <p>{postsError.message}</p>}
      {topicsError && <p>{topicsError.message}</p>}
    </div>
  ) : (
    <div
      className="flex flex-col lg:flex-row md:flex-row gap-4
      p-4 transition-colors duration-500 ease-in-out"
    >
      <TrendingTopicsList trendingTopics={trendingTopics} />
      <ArticleList posts={postsData} />
      <Stats />
    </div>
  );
}

export default MainPage;
