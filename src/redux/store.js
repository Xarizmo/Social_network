import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Mikhail'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Marina'},
        {id: 4, name: 'Natasha'}
      ],
      messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Please call the police'},
        {id: 3, message: 'I wonder where you are..'},
        {id: 4, message: 'Push me! You cant just touch me!'}
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 2},
        {id: 3, message: 'It is impossible!', likesCount: 5},
        {id: 4, message: 'Shut up and take my money!', likesCount: 122}
      ],
      newPostText: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },
  
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber(this._state);
  }
};

export default store;