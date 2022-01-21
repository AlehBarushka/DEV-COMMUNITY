import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { updateNewMessageAC, sendMessageAC } from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
	addMessage: sendMessageAC,
	onMessageChange: updateNewMessageAC,
})(AuthRedirectComponent);

export default DialogsContainer;
