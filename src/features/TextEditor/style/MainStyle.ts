interface Props {
  width?: string | number;
  height?: string | number;
  viewMode?: boolean;
}

const getStyle = (props: Props) => ({
  mainDiv: !props.viewMode ? 
  {
    display: 'flex',
    flexFlow: 'column',
    width: props.width || '100%',
    height: props.height || '100%',

    border: 0,
    borderRadius: 20,
    boxShadow: '0 0 10px 5px #aaaaaa22',
    
    overflow: 'hidden',
    color: '#383838',
    backgroundColor: '#f6f6f6',
  } : {},

  contentDiv: !props.viewMode ? 
  {
    flex: 1,
    padding: 20,
    wordWrap: 'break-word' as any,
    overflow: 'auto',
  } : {}
})

export default getStyle;