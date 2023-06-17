import useSWR from "swr";

import api from "../api";

const swrKey = (params: {}) => ({
  key: "users",
  params,
});

const fetcher = (users: string) => {
  return async () => {
    const res = await fetch(users);
    const data = await res.json();
    return data;
  };
};

export default (_: void, options = {}) => {
  const { users } = api;
  return useSWR(swrKey({}), fetcher(users), options);
};
