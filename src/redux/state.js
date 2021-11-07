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

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);

};


export default state;