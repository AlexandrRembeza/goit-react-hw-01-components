import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 30px;
`;

export const Table = styled.table`
  width: 600px;
  height: 1120px;

  border-radius: 10px;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  overflow: hidden;
`;

export const THead = styled.thead`
  font-size: 20px;
  font-weight: bold;

  background-color: rgb(64, 149, 241);
  color: #fff;
`;

export const THElem = styled.th`
  padding: 20px 0px;

  border: 1px solid rgb(64, 149, 241);
  border-bottom: none;

  border-right: 1px solid #ffff;

  &:last-child {
    border-right-color: rgb(65, 150, 241);
  }
`;

export const TBody = styled.tbody`
  font-size: 14px;

  & tr:nth-of-type(odd) {
    background-color: rgb(246, 239, 237);
  }
`;

// export const Div = styled.div`
//   border: 1px solid black;
//   border-radius: 10px;
// `;
