import {rerenderEntireTree} from "../render";

let state = {
  dialogsPage : {
    dialogs : [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Sveta'},
      {id: 3, name: 'Marina'},
      {id: 4, name: 'Mikhail'}
    ],
    messages : [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'Please call the police'},
      {id: 3, message: 'I wonder where you are..'},
      {id: 4, message: 'Push me! You cant just touch me!'}
    ]
  },
  profilePage : {
    posts : [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 2},
      {id: 3, message: 'It is impossible!', likesCount: 5},
      {id: 4, message: 'Shut up and take my money!', likesCount: 122}
    ],
    newPostText: 'it-kamasutra.com'
  }
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;