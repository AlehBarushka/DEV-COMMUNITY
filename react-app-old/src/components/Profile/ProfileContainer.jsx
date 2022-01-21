import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
		return <Profile {...this.props} />;
	}
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

const ComponentWithURLData = withRouter(ProfileConteiner);

export default connect(mapStateToProps, {
	getUserProfile: getUserProfileThunkCreator,
})(ComponentWithURLData);
