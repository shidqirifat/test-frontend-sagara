import CONFIG from "./CONFIG";

function saveLocalStorage(newUser) {
  let addUsers = [];
  if (isAnyUsersRegister()) addUsers = getLocalStorage();
  if (isEmailExist(newUser)) return false;
  addUsers.push(newUser);

  localStorage.setItem(CONFIG.KEY_APP, JSON.stringify(addUsers));
  return true;
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem(CONFIG.KEY_APP));
}

function isEmailExist(newEmail) {
  let users = [];
  if (isAnyUsersRegister()) users = getLocalStorage();
  else return false;

  const useEmailBefore = users.filter(user => user.email === newEmail.email);
  if (useEmailBefore.length === 0) return false;
  return true;
}

function isAnyUsersRegister() {
  const usersRegister = getLocalStorage();

  if (usersRegister === null) return false;
  return true;
}

export { saveLocalStorage, getLocalStorage, isEmailExist, isAnyUsersRegister };
