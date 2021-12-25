import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import styles from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={ post.message } likes={ post.likesCount } />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    console.log('update');
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
