export const state = () => ({
  messages: [],
  updatedTime: '-',
  activeUser: '',
});

export const getters = {
  getActiveUser: state => {
    return state.activeUser;
  },
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

export const actions = {
  addMessage({commit}, message) {
    message.id = new Date().getTime();
    commit('ADD_MESSAGE', message);
  },
  deleteMessage({commit}, id) {
    commit('DELETE_MESSAGE', id);
  },
  deleteAllMessages({commit}) {
    commit('DELETE_ALL_MESSAGES');
  },
}

export const mutations = {
  ['SET_USER'](state, payload) {
    state.activeUser = payload;
    state.messages = [];
  },
  ['INIT'](state, payload) {
    if (localStorage !== undefined && localStorage[state.activeUser] !== undefined) {
      state.messages = JSON.parse(localStorage[state.activeUser]).messages;
    } else {
      state.messages = [];
    }
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
  ['DELETE_ALL_MESSAGES'](state) {
    state.messages = [];
  },
  ['UPDATE'](state, payload) {
    state.updatedTime = new Date().toLocaleString("fr-FR");
    if (localStorage !== undefined) {
      if (localStorage[state.activeUser] === undefined) {
        localStorage[state.activeUser] = {};
      }
      localStorage[state.activeUser] = JSON.stringify({
        messages: state.messages,
      });
    }
  },
}
