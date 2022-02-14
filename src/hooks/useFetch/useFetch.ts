import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { useState } from "react";

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  axios.get(url, options)
    .then(response => {
      setData(response.data);
    })
    .catch(error => setError(error))
    .finally(() => {
      setIsLoading(false);
    });

  return {data, isLoading, error};
}