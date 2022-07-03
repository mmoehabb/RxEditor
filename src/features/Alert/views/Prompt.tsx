import { useEffect, useRef, useState } from "react";
import { useAnimate, FadeIn, FadeOut } from 'react-animation-maker'

interface Props {
  text: string;
  onSubmit: Function;
}

const Prompt = (props: Props) => {
  const style = getStyle();
  
  const thisDiv = useRef(null);
  const submitButton = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [Anim, setAnim] = useAnimate(FadeIn);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.key === 'Enter') {
          e.preventDefault();
          if (submitButton.current)
            (submitButton.current as HTMLButtonElement).click();
      }
    }
  }, []);
  
  const onSubmitHandler = () => {
    props.onSubmit(inputValue)
    setAnim(FadeOut);
    setTimeout(() => {
      if (thisDiv.current)
        (thisDiv.current as HTMLElement).remove()
    }, 1000);
  }

  const onInputChangeHandler = (e: any) => {
    setInputValue(e.target.value);
  }

  return (
    <div ref={thisDiv}>
      <Anim style={style.mainDiv}>

        <label style={style.label}>
          {props.text}
        </label>

        <input 
          style={style.input}
          type="text" 
          value={inputValue} 
          onChange={onInputChangeHandler} 
          autoFocus
        />

        <button ref={submitButton}
        style={style.button}
        onClick={onSubmitHandler}>
          Submit
        </button>

      </Anim>
    </div>
  );
}

export default Prompt;

const getStyle = () => ({
  mainDiv: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    height: '30vh',
    margin: '20px 0',
    padding: 25,
    borderRadius: 25,
    boxSizing: 'border-box',
    border: 'solid #fff 5px',
    boxShadow: '0 0 10px 1px #00000022',
    backgroundColor: '#3BAFB7',
  },

  label: {
    padding: 10,
  },

  input: {
    padding: 10,
    border: 0,
    borderRadius: 20,
    textAlign: 'center' as 'center',
  },

  button: {
    alignSelf: 'center',
    padding: '15px 30px',
    fontSize: '85%',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 0 5px 1px #00000011',
    color: '#fff',
    backgroundColor: '#7ed6df',
    cursor: 'pointer',
  },
});