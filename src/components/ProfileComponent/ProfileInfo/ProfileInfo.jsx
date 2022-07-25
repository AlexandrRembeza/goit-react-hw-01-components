import { Info, Avatar, Name, Tag, Location } from './ProfileInfo.styled';
import PropTypes from 'prop-types';

export const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <Info>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </Info>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
