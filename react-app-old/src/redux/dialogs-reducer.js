const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Oleg',
        },
        {
            id: 2,
            name: 'Alexander',
        },
        {
            id: 3,
            name: 'Sveta',
        },
        {
            id: 4,
            name: 'Dmitriy',
        },
        {
            id: 5,
            name: 'Dina',
        },
        {
            id: 6,
            name: 'Sandra',
        },
    ],
    messagesData: [
        {
            id: 1,
            message: 'Hi!',
        },
        {
            id: 2,
            message: 'How are you?',
        },
        {
            id: 3,
            message: 'Bitch!',
        },
        {
            id: 4,
            message: 'Hello!',
        },
        {
            id: 5,
            message: 'Yo!',
        },
        {
            id: 6,
            message: 'I am robot',
        },
    ],
    newMessageText: ''
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        case SEND_MESSAGE:
            let newText = state.newMessageText;
            state.messagesData.push({
                id: 7,
                message: newText,
            });
            state.newMessageText = '';
            return state;

        default: return state;
    };
};

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
});

export default dialogsReducer;