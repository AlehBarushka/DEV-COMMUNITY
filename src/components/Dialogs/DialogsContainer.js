import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageAC } from '../../actions';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

export default compose(
	connect(mapStateToProps, {
		sendMessage: sendMessageAC,
	}),
	withAuthRedirect
)(Dialogs);
