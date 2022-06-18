import { useState } from "react";

interface Props {
    style?: object,
    fStyle?: object,
    placeHolder?: string;
    value?: string;
    onChange?: (v: string)=>void;
}

const TextInput = (props: Props) => {
    const [style, setStyle] = useState(props.style || {});

    const onChangeHandler = (e: {target: {value: string}}) => {        
        if (props.onChange) 
            props.onChange(e.target.value);
    }

    const onFocusHandler = () => {
        setStyle({...props.style, ...props.fStyle});
    }

    const onBlurHandler = () => {
        setStyle(props.style || {});
    }

    return (
        <input 
            type="text"
            style={style}
            value={props.value}
            onChange={onChangeHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            placeholder={props.placeHolder || ""}
        />
    );
}

export default TextInput;