import { useEffect, useRef, useState } from 'react';
import Tools from './tools/Tools';
import { loadContentInto, rmChildrenFrom } from './functions/NodeFunctions';
import getStyle from './style/MainStyle';
import { getLastStateOf, isDifferent } from './functions/SaveFunctions';

interface Props {
    width?: string | number;
    height?: string | number;
    viewMode?: boolean;
    content?: Array<Node>;
    updateContent?: (c: Array<Node>) => void;
}

const TextEditor = (props: Props) => {
    const style = getStyle(props);
    const contentDiv = useRef<HTMLDivElement>(null);
    const [saved, setSaved] = useState(true);

    // Load data from props.content if any exists
    useEffect(() => {
        if (!props.content) return;
        if (!contentDiv.current) return;
        rmChildrenFrom(contentDiv.current);
        loadContentInto(contentDiv.current, props.content);
    }, [contentDiv, props.content]);

    const onContentChange = () => {
        setSaved(!needSaving());
    }
    
    const onEditorFocus = () => {
        window.onkeydown = (e) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                saveChanges();
            }
        }
    }

    const onEditorBlur = () => {
        window.onkeydown = null;  
    }

    // Wrapper function for ensuring that the selected text is in the 
    // contentDiv Element. Before using the Text Manipulation functions.
    const funcWrapper = (func: Function) => {
        let focusNode = document.getSelection()?.focusNode;

        // loop over the parents elements of the focusNode
        // searching for the contentDiv element
        while (focusNode) {
            if (focusNode === contentDiv.current) {
                func(); 
                break;
            }
            focusNode = focusNode.parentElement;
        }
    }

    const saveChanges = () => {
        if (contentDiv.current && props.updateContent) {
            const content = getLastStateOf(contentDiv.current)
            props.updateContent(content);
        }
        setSaved(true);
    }

    const needSaving = () => {
        if (!contentDiv.current?.children) return;
        if (!props.content) return;
        
        const nodes1 = Array.from(contentDiv.current?.childNodes);
        const nodes2 =  props.content;
        return isDifferent(nodes1, nodes2);
    }

    return (
        <div style={style.mainDiv}>
            <div 
            ref={contentDiv}
            style={style.contentDiv}
            onFocus={onEditorFocus}
            onBlur={onEditorBlur}
            onInput={onContentChange}
            contentEditable={!props.viewMode}>
            </div>

            { !props.viewMode && 
                <Tools 
                    btnWrapper={funcWrapper} 
                    onSave={saveChanges}
                    needSaving={!saved}
                />
            }
        </div>
    );
}

export default TextEditor;