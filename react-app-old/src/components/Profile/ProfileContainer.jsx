import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { getUserProfileThunkCreator } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileConteiner extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUserProfile(userId);
	}

	render() {
		if (!this.props.isAuth) return <Redirect to='/login' />;

		return <Profile {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return { profile: state.profilePage.profile, isAuth: state.auth.isAuth };
};

const ComponentWithURLData = withRouter(ProfileConteiner);

export default connect(mapStateToProps, {
	getUserProfile: getUserProfileThunkCreator,
})(ComponentWithURLData);
