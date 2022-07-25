import { Caption, TitleWrapper } from './Title.styled';
import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <Caption caption={title}>{title}</Caption>
    </TitleWrapper>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};
