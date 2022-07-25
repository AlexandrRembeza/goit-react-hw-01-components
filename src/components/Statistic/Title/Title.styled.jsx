import styled from '@emotion/styled';

function getTitleColor(props) {
  switch (props.caption) {
    case 'NO TITLE':
      return 'red';
    default:
      return 'gray';
  }
}

export const Caption = styled.h2`
  font-size: 20px;
  font-weight: bold;

  margin: 0;
  letter-spacing: 2px;

  color: ${getTitleColor};
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;

  background-color: lightgray;
`;
