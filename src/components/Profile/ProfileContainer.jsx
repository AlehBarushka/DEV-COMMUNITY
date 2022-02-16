import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import {
	getUserProfileThunkCreator,
	getUserStatusThunkCreator,
	updateUserStatusThunkCreator,
} from '../../actions';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

import Profile from './Profile';

export const ProfileContainer = (props) => {
	const {
		getUserProfile,
		getUserStatus,
		profile,
		userStatus,
		updateUserStatus,
	} = props;

	let params = useParams();

	useEffect(() => {
		let id = params.userId;
		if (!id) {
			id = 21929;
		}
		getUserProfile(id);
		getUserStatus(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.userId]);

	return (
		<Profile
			profile={profile}
			userStatus={userStatus}
			updateStatus={updateUserStatus}
		/>
	);
};

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		userStatus: state.profilePage.status,
	};
};

export default compose(
	connect(mapStateToProps, {
		getUserProfile: getUserProfileThunkCreator,
		getUserStatus: getUserStatusThunkCreator,
		updateUserStatus: updateUserStatusThunkCreator,
	}),
	withAuthRedirect
)(ProfileContainer);
