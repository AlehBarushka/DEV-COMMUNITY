import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.item}>
      <img src="https://www.blexar.com/avatar.png" alt="ava" />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
