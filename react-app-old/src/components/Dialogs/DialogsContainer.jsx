import { connect } from 'react-redux';
import {
	updateNewMessageActionCreator,
	sendMessageActionCreator,
} from '../../redux/dialogs-reducer';

import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		state: state.dialogsPage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(sendMessageActionCreator());
		},
		onMessageChange: (text) => {
			const action = updateNewMessageActionCreator(text);
			dispatch(action);
			console.log('state update');
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
