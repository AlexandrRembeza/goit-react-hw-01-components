import { Card, ProfileWrapper } from './Profile.styled';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { Stats } from './ProfileStats/Stats';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileWrapper>
      <Card>
        <ProfileInfo
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
        />
        <Stats followers={followers} views={views} likes={likes} />
      </Card>
    </ProfileWrapper>
  );
};
