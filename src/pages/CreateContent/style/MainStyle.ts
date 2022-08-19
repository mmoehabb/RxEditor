const getStyle = (direction?: string) => ({
  mainDiv: {
    display: 'flex',
    height: '100vh',
    direction: (direction ? direction : 'ltr') as 'ltr',
  },

  contentDiv: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    overflow: 'hidden',
  },

  exportsDiv: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute' as 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000022',
  },

  exportBtn: (bgcolor?: string, width?: string) => ({
    default: {
      width: width || 'auto',
      margin: '10px 0',
      padding: 20,
      border: 0,
      borderRadius: 5,
      boxShadow: '0 0 5px 1px #00000011',
      fontSize: '1em',
      color: '#fff',
      backgroundColor: bgcolor || '#000000',
      transition: '250ms',
      cursor: 'pointer',
    },
    hover: {
      boxShadow: '0 0 10px 2px #00000044',
    },
  }),
});

export default getStyle;