import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState();

        const addPostContainer = () => {
          store.dispatch(addPostActionCreator());
        };

        const onPostChangeContainer = (text) => {
          const action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
          console.log('state update');
        };
        return (
          <MyPosts
            updateNewPostText={ onPostChangeContainer }
            addPost={ addPostContainer }
            postsData={ state.profilePage.postsData }
            newPostText={ state.profilePage.newPostText }
          />
        );
      }
      }
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
