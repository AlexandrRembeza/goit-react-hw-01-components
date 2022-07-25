import styled from '@emotion/styled';

export const StatItem = styled.li`
  flex-basis: calc(100% / 4);
  background-color: ${getRandomHexColor};

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 15px;
  color: #fff;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 17px;
`;
export const Percentage = styled.span`
  font-size: 17px;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
