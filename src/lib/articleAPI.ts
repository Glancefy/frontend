// import axios from "axios";
// import { config } from "../config/config";
import { Posts, TrendingTopics } from "../types";

export const retrievePostsSample: () => Promise<Posts> = async () => {
  const response: any = await new Promise((resolve) =>
    setTimeout(async () => {
      const response = {
        data: [
          {
            id: 1,
            title: "New record donation to the UNHCR",
            body: "The UN Refugee Agency has received a record $2.2 billion donation from the United States.",
            date: "2022-01-12",
            source: "BBC News",
            reports: 15,
          },
          {
            id: 2,
            title: "Breakthrough in cancer research",
            body: "Scientists have discovered a new method for detecting cancer in its early stages.",
            date: "2022-01-15",
            source: "CNN",
            reports: 11,
          },
          {
            id: 3,
            title: "New COVID-19 variant discovered",
            body: "A new variant of the COVID-19 virus has been discovered in South Africa.",
            date: "2022-02-14",
            source: "The New York Times",
            reports: 19,
          },
          {
            id: 4,
            title: "Climate change agreement reached",
            body: "World leaders have reached an agreement to reduce carbon emissions by 50% by 2030.",
            date: "2022-03-03",
            source: "The Guardian",
            reports: 27,
          },
          {
            id: 5,
            title: "SpaceX launches new satellite",
            body: "SpaceX has successfully launched a new satellite into orbit.",
            date: "2022-04-26",
            source: "Space.com",
            reports: 12,
          },
        ],
      };
      resolve(response);
    }, Math.floor(Math.random() * 1000))
  );
  return response.data;
};

export const retrieveTrendingTopicsSample: () => Promise<TrendingTopics> =
  async () => {
    const response: any = await new Promise((resolve) =>
      setTimeout(async () => {
        const response = {
          data: [
            {
              id: 1,
              name: "UK politics",
              picture:
                "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
              popularity: 22,
            },
            {
              id: 2,
              name: "US politics",
              picture:
                "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
              popularity: 21,
            },
            {
              id: 3,
              name: "France politics",
              picture:
                "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
              popularity: 18,
            },
            {
              id: 4,
              name: "Covid-19",
              picture:
                "https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png",
              popularity: 15,
            },
            {
              id: 5,
              name: "Ukraine-Russia war",
              picture:
                "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
              popularity: 14,
            },
          ],
        };
        resolve(response);
      }, Math.floor(Math.random() * 1000))
    );
    return response.data;
  };
