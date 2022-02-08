import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import styles from './Profile.module.css';

import React from 'react';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateUserStatus} />
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
