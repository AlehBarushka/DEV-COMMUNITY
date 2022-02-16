import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import styles from './Profile.module.css';

import React from 'react';

const Profile = (props) => {
	const { profile, userStatus, updateStatus } = props;

	return (
		<div>
			<ProfileInfo
				profile={profile}
				userStatus={userStatus}
				updateStatus={updateStatus}
			/>
			<MyPostsContainer />
		</div>
	);
};

export default Profile;
