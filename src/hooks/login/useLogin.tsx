import axios from "axios";
import { useApi } from "../api";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const api = useApi();

  return useMutation<any, Error, [string]>({
    mutationFn: (params) => {
      const [phone] = params;
      return api.post(`/api/dispatcher/login`, { phone });
    },
  });
};
