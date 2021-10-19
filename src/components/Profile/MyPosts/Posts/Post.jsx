import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://www.blexar.com/avatar.png" alt="ava" />
      <span>{props.message}</span>
      <div>{props.likes} likes</div>
    </div>
  );
};

export default Post;
