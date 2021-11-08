import { rerenderEntireTree } from "../render";

let state = {
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
        ]

    }
};

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;