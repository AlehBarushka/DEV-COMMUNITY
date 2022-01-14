import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfileAC } from '../../redux/profile-reducer';
import Profile from './Profile';

class ProfileConteiner extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
			this.props.setUserProfile(response.data);
		});
	}

	render() {
		return <Profile {...this.props} />;
	}
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile });

const ComponentWithURLData = withRouter(ProfileConteiner);

export default connect(mapStateToProps, {
	setUserProfile: setUserProfileAC,
})(ComponentWithURLData);
