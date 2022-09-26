import PropTypes from 'prop-types';
import {
  Table,
  TableWrapper,
  THead,
  THElem,
  TBody,
} from './TransactionTable.styled';
import { TransactionElem } from './TransactionBody/TransactionElem';

export const TransactionTable = ({ items }) => {
  return (
    <TableWrapper>
      {/* <Div> */}
      <Table>
        <THead>
          <tr>
            <THElem>Type</THElem>
            <THElem>Amount</THElem>
            <THElem>Currency</THElem>
          </tr>
        </THead>

        <TBody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionElem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </TBody>
      </Table>
      {/* </Div> */}
    </TableWrapper>
  );
};

TransactionElem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
