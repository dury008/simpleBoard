import { instance } from './index';

function register(userData) {
  return instance.post('api/auth/signup/', userData);
}

function login(userData) {
  return instance.post('api/auth/signin/', userData);
}

function refresh(rToken) {
  return instance.post('api/auth/refreshtoken/', rToken);
}

function logout(userid) {
  return instance.post('api/auth/logout/', userid);
}
export { register, login, refresh, logout };
