import axios from "axios";
import { config } from "../config/config";
import { Posts, TrendingTopics } from "../types";

export const retrievePostsSample: () => Promise<Posts> = async () => {
  const response = await axios.get(`${config.api.baseURL}/posts`);
  return response.data;
};

export const retrieveTrendingTopicsSample: () => Promise<TrendingTopics> =
  async () => {
    const response = await axios.get(`${config.api.baseURL}/trending-topics`);
    return response.data;
  };
