import { Section, StatisticList, StatisticWrapper } from './Statistic.styled';
import { Title } from './Title/Title';
import { Stat } from './Stat/Stat';
import PropTypes from 'prop-types';

export const Statistic = ({ title, stats }) => {
  return (
    <Section>
      <StatisticWrapper>
        {title && <Title title={title} />}

        <StatisticList>
          {stats.map(({ id, label, percentage }) => {
            return <Stat key={id} label={label} percentage={percentage} />;
          })}
        </StatisticList>
      </StatisticWrapper>
    </Section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
