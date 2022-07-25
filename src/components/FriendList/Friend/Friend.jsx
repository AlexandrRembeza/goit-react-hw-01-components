import { FriendItem, Status, Image, Name } from './Friend.styled';
import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline} />
      <Image src={avatar} />
      <Name>{name}</Name>
    </FriendItem>
  );
};

Status.propTypes = {
  isOnline: PropTypes.bool.isRequired,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
