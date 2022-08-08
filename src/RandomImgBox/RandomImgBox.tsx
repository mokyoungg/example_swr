import React, { useState } from 'react';
import ImageBox from '../ImageBox/ImageBox';
import * as S from './RandomImgBox.style';
import Axios from '../api';
import Loader from '../Loader/Loader';
import useSWR from 'swr';
import { Image } from '../type';

const key = process.env.REACT_APP_ACCESS_KEY;

const RandomImgBox: React.FC = () => {
  const [randomImg, setRandomImg] = useState<Image>({ id: '', url: '' });

  const getRandomImage = async (url: string) => {
    const res = await Axios.get(url);
    return res;
  };

  const { isValidating, mutate } = useSWR(`/photos/random?client_id=${key}`, getRandomImage, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    onSuccess: (data: any) => {
      const { id, urls } = data;

      setRandomImg({ id, url: urls.regular });
    },
  });

  return (
    <S.Container>
      {/* <Loader /> */}
      {isValidating ? <Loader /> : <ImageBox img={randomImg.url} />}
      <S.ButtonContainer>
        <S.LikeBtn className="button">Like</S.LikeBtn>
        <S.RandomBtn className="button" onClick={() => mutate()}>
          Random
        </S.RandomBtn>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RandomImgBox;
