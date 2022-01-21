import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { getUserProfileThunkCreator } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileConteiner extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 21929;
		}
		this.props.getUserProfile(userId);
	}

	render() {
		return <Profile {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return { profile: state.profilePage.profile };
};

export default compose(
	connect(mapStateToProps, {
		getUserProfile: getUserProfileThunkCreator,
	}),
	withRouter,
	withAuthRedirect
)(ProfileConteiner);
