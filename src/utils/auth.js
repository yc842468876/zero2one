export function getToken() {
  localStorage.getItem('token');
}

export function setToken(token) {
  localStorage.setItem('token', token);
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function isLogin() {
  return !!localStorage.getItem('token');
}