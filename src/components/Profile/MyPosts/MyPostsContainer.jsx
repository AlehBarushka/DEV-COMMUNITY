import { connect } from 'react-redux';
import { addPostAC } from '../../../actions';

import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
	};
};

const MyPostsContainer = connect(mapStateToProps, {
	addPost: addPostAC,
})(MyPosts);

export default MyPostsContainer;
