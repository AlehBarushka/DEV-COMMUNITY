import styles from './Post.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <img src="https://picsum.photos/id/1/1200/500" alt="main img" />
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={styles.posts}>
          <div className={styles.item}>post 1</div>
          <div className={styles.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
