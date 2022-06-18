import { useState } from "react";

interface Props {
    label?: string;
    style?: object;
    mainStyle?: object;
    hoverStyle?: object;
    children?: any;
    onClick?: ()=>void;
    onDoubleClick?: ()=>void;
}

const Button = (props: Props) => {
    const [style, setStyle] = useState(props.mainStyle || getStyle(false));

    const hoverOn = () => {
        setStyle(props.hoverStyle ? {...props.mainStyle, ...props.hoverStyle} : getStyle(true));
    }
    const hoverOff = () => {
        setStyle(props.mainStyle || getStyle(false));
    }

    return (
        <button 
        style={{...style, ...props.style}} 
        onClick={props.onClick}
        onDoubleClick={props.onDoubleClick}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}>
            {props.label || props.children}
        </button>
    );
}

export default Button;

const getStyle = (hover: boolean) => ({
    padding: 20,
    margin: 5,
    border: 0,
    borderRadius: 20,
    boxShadow: `0 ${hover ? '10px 0px' : '5px 1px'} 1px #00000044`,
    transform: hover ? 'translateY(-5px)' : '',
    fontSize: '1em',
    cursor: 'pointer',
    color: '#fff',
    backgroundColor: '#0099BB',
    transition: '250ms',
});