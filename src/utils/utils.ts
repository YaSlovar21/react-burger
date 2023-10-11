

export function getCookie(name:string) {
  return localStorage.getItem(name);
}

export function setCookie(name:string, value:string) {
  localStorage.setItem(name, value)
}

export function deleteCookie() {
  localStorage.clear();
}

export function getStatus(type:string) {
  if (type === 'done') {
    return 'Выполнен'
  } else {
    return 'Готовиться'
  }
}