import { retrieveTrendingTopicsSample } from "@/lib/articleAPI";
import { useQuery } from "@tanstack/react-query";
import TrendingTopicsListItem from "./TrendingTopicsListItem";
import { TrendingTopics } from "@/types";

interface TrendingTopicsListProps {
  trendingTopics?: TrendingTopics;
}

function TrendingTopicsList({
  trendingTopics: trendingTopics,
}: TrendingTopicsListProps) {
  return (
    <div
      className="hidden lg:flex flex-col mt-2 space-y-2 w-1/4 pl-[calc(6%-4rem)]
    lg:sticky lg:top-4 lg:overflow-y-auto lg:max-h-[calc(100vh-4rem)]
    "
    >
      {trendingTopics?.map((topic) => (
        <TrendingTopicsListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
}

export default TrendingTopicsList;
