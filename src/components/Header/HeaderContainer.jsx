import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends Component {
	componentDidMount() {
		this.props.getAuthUserData();
	}

	render() {
		return <Header {...this.props} />;
	}
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login });

export default connect(mapStateToProps, { getAuthUserData: getAuthUserDataThunkCreator })(HeaderContainer);
