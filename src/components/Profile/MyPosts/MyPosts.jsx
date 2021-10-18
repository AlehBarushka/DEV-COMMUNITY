import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div className={styles['posts-block']}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="It's my first post" likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
