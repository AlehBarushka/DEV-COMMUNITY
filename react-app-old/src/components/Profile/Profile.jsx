import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={ props.profilePage.postsData }
        dispatch={ props.dispatch }
        newPostText={ props.profilePage.newPostText }
      />
    </div>
  );
};

export default Profile;
