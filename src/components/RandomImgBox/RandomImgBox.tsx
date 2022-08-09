import React from 'react';
import ImageBox from '../ImageBox/ImageBox';
import * as S from './RandomImgBox.style';
import Loader from '../Loader/Loader';
import useRandomImg from '../../hooks/useRandomImg';

const RandomImgBox: React.FC = () => {
  const { isLoading, randomImg, getRandomImg } = useRandomImg();

  return (
    <S.Container>
      {isLoading ? <Loader /> : <ImageBox img={randomImg.url} />}
      <S.ButtonContainer>
        <S.LikeBtn className="button">Like</S.LikeBtn>
        <S.RandomBtn className="button" onClick={() => getRandomImg()}>
          Random
        </S.RandomBtn>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RandomImgBox;
