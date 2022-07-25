import { FriendListWrapper, List } from './FriendsList.styled';
import { Friend } from './Friend/Friend';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrapper>
      <List>
        {friends.map(({ avatar, id, name, isOnline }) => (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </List>
    </FriendListWrapper>
  );
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
