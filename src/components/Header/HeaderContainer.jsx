import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator } from '../../redux/auth-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
	useEffect(() => {
		props.getAuthUserData();
	}, [props]);
	return <Header {...props} />;
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login });

export default connect(mapStateToProps, { getAuthUserData: getAuthUserDataThunkCreator })(HeaderContainer);
