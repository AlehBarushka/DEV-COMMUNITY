import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { updateNewMessageAC, sendMessageAC } from '../../reducers/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

export default compose(
	connect(mapStateToProps, {
		addMessage: sendMessageAC,
		onMessageChange: updateNewMessageAC,
	}),
	withAuthRedirect
)(Dialogs);
