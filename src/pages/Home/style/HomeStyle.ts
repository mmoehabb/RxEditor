const getStyle = () => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      color: '#fff',
      fontFamily: 'Pangolin',
      background: 'linear-gradient(#3BAFB7, #4EAED7)',
  },

  illustration: {
      position: 'absolute',
      width: '10em',
      right: '2em',
      bottom: '-10px',
  },

  animContainer: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
  }
});

export default getStyle;