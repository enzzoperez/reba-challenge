import {useState, useEffect} from 'react';
import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import Config from 'react-native-config';

axios.defaults.baseURL = Config.API_URL;

const useRemoteData = ({url, method, headers, data}: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .request({url, method, headers, data})
      .then(res => {
        setResponse(res.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, method, headers, data]);

  return {response, error, isLoading};
};

export default useRemoteData;
