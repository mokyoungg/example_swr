import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import * as S from './Loader.style';

const Loader: React.FC = () => {
  return (
    <S.Container>
      <BiLoaderAlt className="spinner" />
    </S.Container>
  );
};

export default Loader;
