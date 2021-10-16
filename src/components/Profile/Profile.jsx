import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <img src="https://picsum.photos/id/1/1200/500" alt="main img" />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
