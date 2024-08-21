export interface Post {
  id: number;
  title: string;
  body: string;
}

export type Posts = Post[];

export interface TrendingTopic {
  id: number;
  name: string;
  picture: string;
}

export type TrendingTopics = TrendingTopic[];
