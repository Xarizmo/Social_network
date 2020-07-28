const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Mikhail'},
    {id: 2, name: 'Sweetlana'},
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, {id: 6, message: body}]
      };
    default:
      return state;
  }
};

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageText = (messageText) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: messageText});

export default dialogsReducer;