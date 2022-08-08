import React from 'react';
import ImageBox from '../ImageBox/ImageBox';
import * as S from './RandomImgBox.style';

const RandomImgBox: React.FC = () => {
  return (
    <S.Container>
      <ImageBox />
      <S.ButtonContainer>
        <S.LikeBtn className="button">Like</S.LikeBtn>
        <S.RandomBtn className="button">Random</S.RandomBtn>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default RandomImgBox;
