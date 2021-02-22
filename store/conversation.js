export const state = () => ({
  messages: [],
  updatedTime: '-',
})

export const getters = {
  getMessages: state => {
    return state.messages;
  },
  getUpdatedTime: state => {
    return state.updatedTime;
  },
  getMessageCount: state => {
    return state.messages.length;
  },
}

export const mutations = {
  addMessage(state, payload) {
    payload.id = new Date().getTime();
    state.messages.unshift(payload);
  },
  deleteMessage(state, payload) {
    let index = state.messages.map(function (message) {
      return message.id
    }).indexOf(payload);
    state.messages.splice(index, 1);
  },
  deleteAllMessages(state, payload) {
    state.messages = [];
  },
  setUpdatedTime(state, payload) {
    state.updatedTime = new Date().toLocaleString("en-EN");
  },
}
