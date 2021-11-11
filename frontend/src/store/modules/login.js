import { login, refresh, logout } from '@/api/auth';
import VueCookies from 'vue-cookies';

const loginStore = {
  state: {
    accessToken: VueCookies.get('accessToken'),
    refreshToken: VueCookies.get('refreshToken'),
    userId: VueCookies.get('userId'),
    username: VueCookies.get('username'),
  },
  mutations: {
    loginToken(state, payload) {
      VueCookies.set('accessToken', payload.accessToken, '1h');
      VueCookies.set('refreshToken', payload.refreshToken, '2h');
      VueCookies.set('username', payload.username, '2h');
      VueCookies.set('userId', payload.id, '2h');
      state.username = payload.username;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
      state.userId = payload.id;
    },
    refreshToken(state, payload) {
      VueCookies.set('accessToken', payload.accessToken, '1h');
      state.accessToken = payload.accessToken;
    },
    logout(state) {
      state.username = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.userId = null;
      VueCookies.remove('accessToken');
      VueCookies.remove('refreshToken');
      VueCookies.remove('userId');
      VueCookies.remove('username');
    },
  },
  getters: {},
  actions: {
    async LOGIN({ commit }, userData) {
      const res = await login(userData);
      commit('loginToken', res.data);
      return res;
    },
    async REFRESH_TOKEN({ commit }) {
      const res = await refresh({
        refreshToken: VueCookies.get('refreshToken'),
      });
      commit('refreshToken', res.data);
      return res;
    },
    async LOGOUT({ commit }, userid) {
      const res = await logout(userid);
      commit('logout');
      return res;
    },
  },
};

export default loginStore;
