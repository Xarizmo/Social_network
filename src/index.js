import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Sveta'},
  {id: 3, name: 'Marina'},
  {id: 4, name: 'Mikhail'}
];

let messages = [
  {id: 1, message: 'Hi!'},
  {id: 2, message: 'Please call the police'},
  {id: 3, message: 'I wonder where you are..'},
  {id: 4, message: 'Push me! You cant just touch me!'}
];

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 12},
  {id: 2, message: 'It\'s my first post', likesCount: 2},
  {id: 3, message: 'It is impossible!', likesCount: 5},
  {id: 4, message: 'Shut up and take my money!', likesCount: 122}
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
