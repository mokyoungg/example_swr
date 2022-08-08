import React from 'react';
import ImageUrl from '../asset/swr_img.jpg';
import * as S from './ImageBox.style';

const ImageBox: React.FC = () => {
  return (
    <S.ImgContainer>
      <S.Img src={ImageUrl} />
    </S.ImgContainer>
  );
};

export default ImageBox;
