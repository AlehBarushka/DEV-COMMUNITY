import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={ post.message } likes={ post.likesCount } />
  ));

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={ styles['posts-block'] }>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } placeholder='enter your post message' value={ props.newPostText } />
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
