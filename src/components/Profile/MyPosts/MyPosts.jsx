import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={ post.message } likes={ post.likesCount } />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={ styles['posts-block'] }>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
      </div>
      <div className={ styles.posts }>{ postsElements }</div>
    </div>
  );
};

export default MyPosts;
