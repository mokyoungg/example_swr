import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
  }
`;

export const LikeBtn = styled.button`
  background-color: #1260cc;
`;

export const RandomBtn = styled.button`
  background-color: #ff5733;
`;
