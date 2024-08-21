import axios from "axios";
import { config } from "../config/config";

// interface of post list
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// type of post list
export type Posts = Post[];

export const retrievePosts: () => Promise<Posts> = async () => {
  console.log(config.api.baseURL);
  const response = await axios.get(`${config.api.baseURL}poss`);
  console.log(response.data);
  return response.data;
};
