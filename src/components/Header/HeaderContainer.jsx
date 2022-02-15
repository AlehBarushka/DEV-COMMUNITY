import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuthUserDataThunkCreator } from '../../actions';

import Header from './Header';

const HeaderContainer = (props) => {
	const { isAuth, getAuthUserData, login } = props;

	useEffect(() => {
		getAuthUserData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <Header isAuth={isAuth} getAuthUserData={getAuthUserData} login={login} />;
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login });

export default connect(mapStateToProps, { getAuthUserData: getAuthUserDataThunkCreator })(HeaderContainer);
