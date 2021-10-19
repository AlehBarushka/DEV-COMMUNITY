import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
  let postsData = [
    {
      id: 1,
      messages: 'Hi, how are you?',
      likesCount: 15,
    },
    {
      id: 2,
      messages: "It's my first post are you?",
      likesCount: 20,
    },
  ];

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
        <Post message={postsData[0].messages} likes={postsData[0].likesCount} />
        <Post message={postsData[1].messages} likes={postsData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
