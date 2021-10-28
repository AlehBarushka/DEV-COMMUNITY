import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {
    id: 1,
    messages: 'Hi, how are you?',
    likesCount: 15,
  },
  {
    id: 2,
    messages: "It's my first post are you?",
    likesCount: 20,
  },
];

let dialogsData = [
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
];

let messagesData = [
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
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
