import ReactDOM from "react-dom";
import MessageView from "./views/MessageView";
import Prompt from "./views/Prompt";

export const showMessage = (text: string, color: string) => {
  const container = document.getElementById('MessagesContainer');
  const msgElement = document.createElement("div");

  if (!container) return;

  container.appendChild(msgElement);
  ReactDOM.render(
    <MessageView 
      text={text} 
      color={color}
      duration={5000}
    />,
    msgElement
  );
}

export const getUserInput = (
  text: string, 
  onSubmit: (value: string) => void
) => {
  const container = document.getElementById('PromptsContainer');
  const msgElement = document.createElement("div");

  if (!container) return;

  container.appendChild(msgElement);
  ReactDOM.render(
    <Prompt 
      text={text} 
      onSubmit={onSubmit} 
    />,
    msgElement
  );
}

export const showSuccess = (text: string) => {
  showMessage(text, '#27ae60');
}

export const showError = (text: string) => {
  showMessage(text, '#c0392b');
}