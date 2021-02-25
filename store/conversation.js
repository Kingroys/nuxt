export const state = () => ({
  username: '',
  messages: [],
  updatedTime: [],
});

export const getters = {
  getUsername: state => {
    return state.username;
  },
  getMessages: state => {
    return state.messages.filter(message => message.username === state.username);
  },
  getUpdatedTime: state => {
    let updatedTime = state.updatedTime.find(updatedTime => updatedTime.username === state.username) ?? [];

    return updatedTime.time ?? updatedTime.time;
  },
  getMessageCount: state => {
    return state.messages.filter(message => message.username === state.username).length;
  },
}

export const actions = {
  addMessage({commit}, message) {
    message.id = new Date().getTime();
    commit('ADD_MESSAGE', message);
  },
  deleteMessage({commit}, id) {
    commit('DELETE_MESSAGE', id);
  },
  deleteAllMessages({commit}) {
    commit('DELETE_USER_MESSAGES');
  },
}

export const mutations = {
  ['SET_USER'](state, payload) {
    state.username = payload;
  },
  ['ADD_MESSAGE'](state, payload) {
    state.messages.unshift(payload);
  },
  ['DELETE_MESSAGE'](state, payload) {
    let index = state.messages.map(function (message) {
      return message.id
    }).indexOf(payload);
    state.messages.splice(index, 1);
  },
  ['DELETE_USER_MESSAGES'](state) {
    state.messages = state.messages.filter(message => message.username !== state.username);
  },
  ['UPDATE'](state, payload) {
    state.updatedTime.unshift( {
      'time': new Date().toLocaleString('fr-FR'),
      'username': state.username,
    });
  },
}
