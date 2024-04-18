import axios from "axios";
import { useState } from "react";
import { useCookies } from "next-client-cookies";

export const useApi = () => {
  const cookies = useCookies();
  const [token] = useState<string | null>(cookies.get("token") ?? null);
  const authorization = token ? `Bearer ${token}` : "";

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_GECGO_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authorization,
      'Access-Control-Allow-Origin': '*',
    },
  });
};
