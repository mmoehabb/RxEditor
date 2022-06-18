import { deepCloneNode } from "./NodeFunctions";

export const getLastStateOf = (div: HTMLDivElement) => {
  const childNodes = div.childNodes;
  const content = [];

  for (let node of Array.from(childNodes))
      content.push(deepCloneNode(node));

  return content;
}

// TODO: make it more precise (not abstract onto textContent)
export const isDifferent = 
(arr1: Array<Node>, arr2: Array<Node>) => {
  if (arr1.length !== arr2.length) 
    return true;
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].textContent !== arr2[i].textContent) 
      return true;
  }

  return false;
}