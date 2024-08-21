import { TrendingTopic } from "@/types";

interface TrendingTopicsListItemProps {
  topic: TrendingTopic;
}

function TrendingTopicsListItem({ topic }: TrendingTopicsListItemProps) {
  return (
    <div className="flex flex-row items-center space-x-4 cursor-pointer p-2">
      <img
        src={topic.picture}
        alt={topic.name}
        className="rounded-2xl w-12 h-12 object-cover"
      />
      <h2 className="text-lg font-semibold">{topic.name}</h2>
    </div>
  );
}

export default TrendingTopicsListItem;
