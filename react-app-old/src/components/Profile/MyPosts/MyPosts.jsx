import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={ post.message } likes={ post.likesCount } />
  ));

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = (e) => {
    const text = e.target.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    console.log('state update');
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
