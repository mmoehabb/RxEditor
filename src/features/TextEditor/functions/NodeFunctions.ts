import { getUserInput, showError } from "../../Alert/Alert";


const getRange = () => {
	const selection = document.getSelection();
	const range = selection?.getRangeAt(0);
	return range;
}

const addAttributesTo = (element: HTMLElement, attributes: Array<string>) => {
	if (!element) return;
		
	for (let attr of attributes) {
		getUserInput(`Enter ${attr} attribute value:`, 
			(value) => element?.setAttribute(attr, value)
		);
	}
}

const surroundWithTag = (tag: string) => {
    const range = getRange();
    const element = document.createElement(tag);
    range?.surroundContents(element);
    range?.collapse();
    return element;
}

const removeSurroundingFrom = (element: Node) => {
    const oldNode = element.parentElement as HTMLElement;
    const newNode = document.createTextNode(oldNode.innerText);
    oldNode.replaceWith(newNode);
}

const getContainer = () => {
    const range = getRange();
    if (!range) return null;

    let element = range.commonAncestorContainer as HTMLElement;
    if (!element) return null;

    const parent = element.parentElement;
    if (!parent) return null;

    if (element.nodeName === "#text" && parent.id === "TextEditorDiv")
        element = surroundWithTag("div");
    else if (parent.id !== "TextEditorDiv")
        element = parent;
    
    return element;
}

// Add new node to the editor. Either by inserting or surrounding.
export const add = (tag: string, content?:string, surrounding?: boolean, range?: Range) => {
	try {
        if (!range) range = getRange();
        const container = range?.commonAncestorContainer;

        if (!range?.collapsed && container) {
            if (container.parentElement?.nodeName === tag.toUpperCase())
                removeSurroundingFrom(container);
            else if (container.parentElement?.nodeName !== "DIV" && !surrounding) {
                removeSurroundingFrom(container);
                return surroundWithTag(tag);
            }
            else
                return surroundWithTag(tag);
        }

        // if the range is empty insert new node
        else if (content && container?.nodeName === 'DIV' && !surrounding) {
            const element = document.createElement(tag);
            element.innerHTML = content;
            range?.insertNode(element);
            return element;
        }
	}
	catch(e: any) {
		showError(e.message);
	}
}


// Add node with a specific attributes
export const addTagWithAttributes = (tag: string, attributes:Array<string>) => {
	const range = getRange();
    if (tag === "") {
		getUserInput(`Enter Node name value:`, 
			(tag) => {
				const addedElement = add(tag, "Empty", false, range);
				if (addedElement)
					addAttributesTo(addedElement, attributes)
			}
		);
	}
	else {
		const addedElement = add(tag, "Empty", false, range);
		if (addedElement)
			addAttributesTo(addedElement, attributes)
	}
}


export const modifyStyle = (newstyle?: string) => {
    let element = getContainer();
    if (!element) return;
    
    if (!newstyle) {
        addAttributesTo(element, ["style"]);
        return;
    }

    let counter = 0;
    while (element.id !== "TextEditorDiv") {
        element.setAttribute("style", newstyle);
        if (element.parentElement) 
            element = element.parentElement;
        if (++counter > 10)
            return; 
    }
}

export const addStyle = (newstyle?: string, elem?: HTMLElement) => {
    let element = elem || getContainer();
    if (!element) return;
    
    if (!newstyle) {
        console.log("test")
        getUserInput("Input CSS:", 
            value => element && addStyle(value, element)
        );
        return;
    }

    let counter = 0;
    while (element.parentElement?.id !== "TextEditorDiv") {
        if (element.parentElement) 
            element = element.parentElement;
        if (++counter > 10)
            return; 
    }
    element.setAttribute("style", element.getAttribute("style") + (newstyle || ""));
}

export const setStyle = (attr: string, value: string) => {
    let element = getContainer();
    if (!element) return;

    let counter = 0;
    while (element.parentElement?.id !== "TextEditorDiv") {
        if (element.parentElement) 
            element = element.parentElement;
        if (++counter > 10)
            return; 
    }
    element.style[attr as any] = value;
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