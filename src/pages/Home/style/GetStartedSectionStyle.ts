import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  root: {
      display: 'flex',
      flexFlow: 'column',
      width: mediaQuery('(min-width: 600px)') ? '65%' : '85%',
      height: '80%',
      zIndex: 1,
  },

  topDiv: {
      root: {
          flex: mediaQuery('(min-width: 600px)') ? 1 : 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Port Lligat Slab',
          fontSize: '3em',
          userSelect: 'none',
      },

      title: {
          fontSize: '100%',
          color: '#fff',
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },

      p: {
          textAlign: 'justify' as any,
          width: '100%',
          fontSize: '40%',
      },
  },

  btnsDiv: {
      flex: mediaQuery('(min-width: 600px)') ? 1 : 3,
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      width: mediaQuery('(min-width: 850px)') ? '25vw' : '75vw',
  },

  btnContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '15em',
      height: '5em',
      margin: 25,
  },

  startBtn: {
      fontFamily: 'Pangolin',
      width: '100%',
      height: '100%',
  },

  loadBtn: {
      fontFamily: 'Pangolin',
      width: '70%',
      height: '100%',
      border: 'solid 4px #fff',
  }
});

export default getStyle;