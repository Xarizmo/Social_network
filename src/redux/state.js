let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Marina'},
        {id: 4, name: 'Mikhail'}
      ],
      messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Please call the police'},
        {id: 3, message: 'I wonder where you are..'},
        {id: 4, message: 'Push me! You cant just touch me!'}
      ]
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;