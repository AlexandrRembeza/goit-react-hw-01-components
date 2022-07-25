import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  align-items: flex-end;

  margin: 0;
  padding: 0;

  background-color: rgb(247, 230, 188);

  border-radius: 10px;
  border: 1px solid gray;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 3);

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 30px 15px;
  border-right: 1px solid gray;

  &:last-child {
    border: none;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

export const Quantity = styled.span`
  font-size: 17px;
  font-weight: bold;
  color: black;
`;
