import { isEmailExist, getLocalStorage } from "./storage-helper";

function authLogin(account) {
  if (!isEmailExist(account)) return false;

  return isMatch(account);
}

function isMatch(account) {
  const users = getLocalStorage();

  const userFound = users.filter(
    (user) => user.email === account.email && user.password === account.password
  );
  if (userFound.length === 0) return false;

  saveAuth(userFound[0]);
  return true;
}

function saveAuth(user) {
  document.cookie = `username=${user.firstName} ${user.lastName}`;
}

function getUserLogin() {
  const ISSERVER = typeof window === "undefined";

  if (!ISSERVER) return getCook("username");
}

function checkIsLogin() {
  return getUserLogin() === "" ? false : true;
}

function authLogout() {
  document.cookie = "username=";
}

function getCook(cookiename) {
  var cookiestring = RegExp(cookiename + "=[^;]+").exec(document.cookie);
  return decodeURIComponent(
    !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""
  );
}

export { authLogin, getUserLogin, checkIsLogin, authLogout };
