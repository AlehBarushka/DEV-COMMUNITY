import { connect } from 'react-redux';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	};
};

const MyPostsContainer = connect(mapStateToProps, {
	addPost: addPostAC,
	updateNewPostText: updateNewPostTextAC,
})(MyPosts);

export default MyPostsContainer;
