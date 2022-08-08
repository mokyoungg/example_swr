import React from 'react';
import ImageUrl from '../asset/swr_img.jpg';
import * as S from './ImageBox.style';

export interface Props {
  img: string;
}

const ImageBox: React.FC<Props> = ({ img }) => {
  return (
    <S.ImgContainer>
      <S.Img src={img.length ? img : ImageUrl} alt="img" />
    </S.ImgContainer>
  );
};

export default ImageBox;
