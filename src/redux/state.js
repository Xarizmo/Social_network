const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
      newPostText: 'it-kamasutra.com'
    }
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (messageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: messageText});

export default store;