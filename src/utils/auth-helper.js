import { isEmailExist, getLocalStorage } from "./storage-helper";
import CONFIG from "./CONFIG";

function authLogin(account) {
  if (!isEmailExist(account)) return false;

  return isMatch(account);
}

function isMatch(account) {
  const users = getLocalStorage();

  const userFound = users.filter(user => user.email === account.email && user.password === account.password);
  if (userFound.length === 0) return false;

  saveAuth(userFound[0]);
  return true;
}

function saveAuth(user) {
  localStorage.setItem(CONFIG.KEY_USER, JSON.stringify(user))
}

function getUserLogin() {
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) return JSON.parse(localStorage.getItem(CONFIG.KEY_USER));
}

export { authLogin, getUserLogin };