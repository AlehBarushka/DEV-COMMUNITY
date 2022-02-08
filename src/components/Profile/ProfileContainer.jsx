import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { compose } from 'redux';
// import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import {
	getUserProfileThunkCreator,
	getUserStatusThunkCreator,
	updateUserStatusThunkCreator,
} from '../../redux/profile-reducer';

import Profile from './Profile';

export const ProfileContainer = (props) => {
	let params = useParams();
	useEffect(() => {
		let userId = props.match.params.userId;
		if (!userId) {
			userId = 21929;
		}
		props.getUserProfile(userId);
		props.getUserStatus(userId);
	}, []);
	return <Profile {...props} />;
};

// class ProfileConteiner extends Component {
// 	componentDidMount() {
// 		let userId = this.props.match.params.userId;
// 		if (!userId) {
// 			userId = 21929;
// 		}
// 		this.props.getUserProfile(userId);
// 		this.props.getUserStatus(userId);
// 	}

// 	render() {
// 		return <Profile {...this.props} />;
// 	}
// }

const mapStateToProps = (state) => {
	return { profile: state.profilePage.profile, status: state.profilePage.status };
};

export default compose(
	connect(mapStateToProps, {
		getUserProfile: getUserProfileThunkCreator,
		getUserStatus: getUserStatusThunkCreator,
		updateUserStatus: updateUserStatusThunkCreator,
	})
	// withAuthRedirect
)(ProfileContainer);
