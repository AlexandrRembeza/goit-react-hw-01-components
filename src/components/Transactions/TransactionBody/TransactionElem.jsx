import { TableElem } from './TransactionElem.styled';

export const TransactionElem = ({ type, amount, currency }) => {
  return (
    <tr>
      <TableElem>{type}</TableElem>
      <TableElem>{amount}</TableElem>
      <TableElem>{currency}</TableElem>
    </tr>
  );
};
