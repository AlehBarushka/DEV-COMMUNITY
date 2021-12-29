import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={ props.store } />
    </div>
  );
};

export default Profile;
