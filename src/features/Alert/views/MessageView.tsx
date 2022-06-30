import { useEffect, useRef } from 'react';
import { useAnimate, SlideInLeft, SlideOutLeft } from 'react-animation-maker'

interface Props {
  text: string;
  color: string;
  duration: number;
}

const MessageView = (props: Props) => {
  const style = getStyle(props.color);

  const thisDiv = useRef(null);
  const [Anim, setAnim] = useAnimate(SlideInLeft);

  useEffect(() => {
    // Play collapse animation after a specific amount of time
    setTimeout(() => setAnim(SlideOutLeft), props.duration);

    // Then, remove the message html element from the dom after 1 sec
    setTimeout(() => {
      if (thisDiv.current)
        (thisDiv.current as HTMLDivElement).remove();
    }, props.duration + 1000);
  }, [setAnim, props.duration])

  return (
    <div ref={thisDiv}>
      <Anim style={style.mainDiv}>
        <label>
          {props.text}
        </label>
      </Anim>
    </div>
  );
}

export default MessageView;

const getStyle = (color: string) => ({
  mainDiv: {
    padding: '15px 30px',
    margin: '15px 0',
    fontSize: '85%',
    borderRadius: '20px 0 20px 0',
    boxShadow: '0 0 5px 1px #b2bec3',
    color: '#f1f1f1',
    backgroundColor: color,
  }
});