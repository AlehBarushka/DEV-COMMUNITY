import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
	getUserProfileThunkCreator,
	getUserStatusThunkCreator,
	updateUserStatusThunkCreator,
} from '../../redux/profile-reducer';

import Profile from './Profile';

export const ProfileContainer = (props) => {
	let params = useParams();

	useEffect(() => {
		let id = params.userId;
		if (!id) {
			id = 21929;
		}
		props.getUserProfile(id);
		props.getUserStatus(id);
	}, [params.userId]);

	return <Profile {...props} />;
};

const mapStateToProps = (state) => {
	return { profile: state.profilePage.profile, status: state.profilePage.status };
};

export default connect(mapStateToProps, {
	getUserProfile: getUserProfileThunkCreator,
	getUserStatus: getUserStatusThunkCreator,
	updateUserStatus: updateUserStatusThunkCreator,
})(ProfileContainer);
