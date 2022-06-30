import { getUserInput } from "../../Alert/Alert";

// Add new node to the editor. Either by inserting or surrounding.
export const add = (tag: string, content?:string, surrounding?: boolean) => {
    const selection = document.getSelection();
    const range = selection?.getRangeAt(0);
    const container = range?.commonAncestorContainer;

    if (!range?.collapsed && surrounding) {
        if(container?.parentElement?.nodeName !== tag.toUpperCase()) {
            // surround the selected content with the tag
            const element = document.createElement(tag);
            range?.surroundContents(element);
            range?.collapse();
            return element;
        }
        else {
            // remove the tag surrounding
            const oldNode = container?.parentElement as HTMLElement;
            const newNode = document.createTextNode(oldNode.innerText);
            oldNode.replaceWith(newNode);
            return null;
        }
    }
    // if the range is empty insert new node
    else if (content && container?.nodeName === 'DIV') {
        const element = document.createElement(tag);
        element.innerHTML = content;
        range?.insertNode(element);
        return element;
    }
}


// Add node with a specific attributes
export const addTagWithAttributes = (tag: string, attributes:Array<string>) => {
    if (tag === "") {
        tag = String(getUserInput(`Enter Node name value:`));
    }

    const addedElement = add(tag, "Empty", true);
    if (!addedElement) return;
    
    for (let attr of attributes) {
        const inputValue = String(getUserInput(`Enter ${attr} attribute value:`));
        addedElement?.setAttribute(attr, inputValue);
    }
}


export const deepCloneNode = (node: Node) => {
    const clonedNode = node.cloneNode();

    if ((node as HTMLElement).childElementCount === 0) 
        clonedNode.textContent = node.textContent;
    else
        node.childNodes.forEach((childNode) => {
            const clonedChild = deepCloneNode(childNode);
            clonedNode.appendChild(clonedChild)
        });

    return clonedNode;
}


export const rmChildrenFrom = (div: HTMLDivElement) => {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}


export const loadContentInto = (div:HTMLDivElement, content: Array<Node>) => {
    for (let node of content) {
        const cloned = deepCloneNode(node);
        div.appendChild(cloned);
    }
}