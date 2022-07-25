import PropTypes from 'prop-types';

import { Profile } from 'components/ProfileComponent/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendsList';
import { TransactionTable } from 'components/Transactions/TransactionTable';

import userData from './user.json';
import statsData from './data.json';
import friendsData from './friends.json';
import transactionsData from './transactions.json';

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = userData;

export const App = () => {
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistic title="Upload stats" stats={statsData} />
      <Statistic stats={statsData} />

      <FriendList friends={friendsData} />

      <TransactionTable items={transactionsData} />
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

TransactionTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
