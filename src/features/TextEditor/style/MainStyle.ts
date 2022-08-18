interface Props {
  width?: string | number;
  height?: string | number;
  viewMode?: boolean;
}

const getStyle = (props: Props, saved: boolean) => ({
  mainDiv: !props.viewMode ? 
  {
    display: 'flex',
    flexFlow: 'column-reverse',
    width: props.width || '100%',
    height: props.height || '100%',
  } : {},

  contentDiv: !props.viewMode ? 
  {
    flex: 5,
    padding: 20,
    wordWrap: 'break-word' as any,
    boxShadow: '0 0 10px 5px #aaaaaa22',
    overflow: 'auto',
    color: '#383838',
    backgroundColor: '#f6f6f6',
    borderBottom: `solid ${saved ? '#00b894' : '#ff7675'} 2px`,
    borderRadius: '0 0 20px 20px',
  } : {}
})

export default getStyle;