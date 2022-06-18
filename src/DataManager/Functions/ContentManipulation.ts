type Attribute = {
  name: string;
  value: string;
}

export type AbstractNode = {
  nodeName: string;
  textContent?: string | null;
  attributes?: Array<Attribute>;
  childAbsNodes?: Array<AbstractNode> | null;
}

/* 
  Function that takes a HTMLdocument Node, and returns an abstract 
  object - that contains only the required attrebutes - of it.
*/
export function abstractNode(node: HTMLElement): AbstractNode {
  const nodeName = node.nodeName;
  const textContent = node.textContent;
  const childAbsNodes: Array<AbstractNode> = [];

  // in case of the node is DIV (for instance), deep clone its children
  if (node.nodeType !== Node.TEXT_NODE) {
    node.childNodes.forEach((child) => {
      childAbsNodes.push(abstractNode(child as HTMLElement));
    });

    const attributes = [];
    for (const attr of Array.from(node.attributes)) {
      attributes.push({
        name: attr.name,
        value: attr.value
      });
    }

    return {
      nodeName,
      attributes,
      childAbsNodes
    };
  }

  // otherwise, return the trivial abstract object
  return {
    nodeName,
    textContent
  };
}


/* 
  Function that creates HTMLelemnt Node from abstract node object
*/
export function getNodeFromAbstract(absNode: AbstractNode): any {
  try {
    // return text node if the abstract contains textContent
    if (absNode.nodeName === "#text")
      return document.createTextNode(absNode.textContent || "");

    // otherwise, create the specific required node, initialize
    // its childNodes, then return it.
    const element = document.createElement(absNode.nodeName);

    if (absNode.attributes) {
      for (const attr of absNode.attributes) {
        element.setAttribute(attr.name, attr.value);
      }
    }
    absNode.childAbsNodes?.forEach(
      (absChild) => element.appendChild(getNodeFromAbstract(absChild))
    )
    return element;
  }
  catch(e: any) {
    throw new Error(`getNodeFromAbstract function failed: ${e.message}`);
  }
}
