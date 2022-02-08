import dialogsReduser from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 15,
                },
                {
                    id: 2,
                    message: "It's my first post are you?",
                    likesCount: 20,
                },
            ],
            newPostText: 'React-tutorial'
        },
        dialogsPage: {
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

        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() { return this._state; },
    subscribe(observer) {
        this._callSubscriber = observer;  //паттерн "наблюдатель" observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;