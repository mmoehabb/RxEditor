export const showMessage = (text: string, color: string) => {
  window.alert(text);
}

export const getUserInput = (text: string) => {
  return window.prompt(text);
}

export const showSuccess = (text: string) => {
  showMessage(text, '#27ae60');
}

export const showError = (text: string) => {
  showMessage(text, '#c0392b');
}