import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  const addPostContainer = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChangeContainer = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
    console.log('state update');
  };

  return <MyPosts
    updateNewPostText={ onPostChangeContainer }
    addPost={ addPostContainer }
    postsData={ state.profilePage.postsData }
    newPostText={ state.profilePage.newPostText }
  />;
};

export default MyPostsContainer;
