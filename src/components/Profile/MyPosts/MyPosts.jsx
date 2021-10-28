import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.messages} likes={post.likesCount} />
  ));

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
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
