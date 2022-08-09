import { useState, useCallback } from 'react';
import Axios from '../api';
import { Image } from '../type';
import useSWR from 'swr';

const useRandomImg = () => {
  const [randomImg, setRandomImg] = useState<Image>({ id: '', url: '' });

  const randomImgFetcher = useCallback(async (url: string) => {
    const res = await Axios.get(url);
    return res;
  }, []);

  const { isValidating, mutate } = useSWR(`/photos/random`, randomImgFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false,

    onSuccess: (data: any) => {
      const { id, urls } = data;

      setRandomImg({ id, url: urls.regular });
    },
  });

  return {
    isLoading: isValidating,
    randomImg,
    getRandomImg: mutate,
  };
};

export default useRandomImg;
