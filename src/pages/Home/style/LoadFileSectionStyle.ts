import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  root: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '80%',
      height: '90%',
      zIndex: 0,
  },
  row: (w?: string, justify?: string) => ({
      display: 'flex',
      justifyContent: justify || 'center',
      width: mediaQuery('(min-width: 768px)') ? w : '100%',
  }),
  textInput: (focus: boolean) => ({
      flex: 1,
      width: 100,
      border: 0,
      outline: 0,
      borderRadius: focus ? '2em' : '1em',
      padding: '4vh',
      fontSize: '1em',
      fontFamily: 'Pangolin',
      textAlign: 'center' as 'center',
      transform: focus ? 'translate(10px, -10px)' : 
      'translate(0, 0)',
      boxShadow: focus ? '-10px 10px 0px 5px #00000044' : 
      '0 0 5px 2px #00000022',
      transition: '250ms',
  }),
  backBtn: {
      position: mediaQuery('(min-width: 480px)') ? 'absolute' : '', 
      border: 0, 
      backgroundColor: 'transparent', 
      transition: '500ms'
  }
});

export default getStyle;