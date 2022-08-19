const getStyle = (dir: 'ltr' | 'rtl') => ({
  mainDiv: {
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      direction: dir,
  },

  contentDiv: {
      root: {
          flex: 3,
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          width: '100%',
          backgroundColor: '#f1f1f1',
          overflow: 'hidden',
      },

      viewer: {
          width: '80%',
          height: '100%',
          padding: '20px 45px',
          color: "#444", 
          backgroundColor: "#f8f8f8",
          boxShadow: '0 0 10px 2px #00000011',
          overflowY: 'auto' as any,
      }
  },
});

export default getStyle;