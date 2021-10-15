import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="It's my first post" likes="20" />
      </div>
    </div>
  );
};

export default MyPosts;
