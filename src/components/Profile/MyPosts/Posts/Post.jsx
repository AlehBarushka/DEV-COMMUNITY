import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://www.blexar.com/avatar.png" alt="ava" />
      {props.message}
      <div>{props.likes} likes</div>
    </div>
  );
};

export default Post;
