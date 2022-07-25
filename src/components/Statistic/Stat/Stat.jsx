import { StatItem, Label, Percentage } from './Stat.styled';
import PropTypes from 'prop-types';

export const Stat = ({ percentage, label }) => {
  return (
    <StatItem>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </StatItem>
  );
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
