import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import styles from './Profile.module.css';

import React from 'react';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo {...props} />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
