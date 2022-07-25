import styled from '@emotion/styled';

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 25px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: auto;
  max-width: 100%;

  background-color: rgb(180, 225, 243);
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: gray;
`;

export const Location = styled.p`
  font-size: 16px;
  color: gray;
`;
