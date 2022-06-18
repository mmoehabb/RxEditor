import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  secDiv: {
      display: 'flex', 
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: mediaQuery('(min-width: 768px)') ? '80%' : '95%',
      overflow: 'hidden',
  },

  labelDiv: {
      display: "flex",
      flexFlow: "row",
      justifyContent: 'center',
      width: mediaQuery('(min-width: 768px)') ? '80%' : '100%',
      overflow: 'hidden',
  },

  labelInput: {
      textAlign: 'center' as 'center',
      fontSize: mediaQuery('(min-width: 768px)') ? '2em' : '1em',
      fontWeight: 'bold',
      width: '80%',
      margin: 15,
      padding: 15,
      borderRadius: 25,
      border: 0,
      boxShadow: '0 0 10px 2px #00000022',
      color: '#666',
      backgroundColor: '#f6f6f6',
  },

  removeBtn: (mode?: string) => {
      if (mode === "hover") return ({
          boxShadow: '0 0 5px 2px #00000033'
      })
      else return ({
          padding: '10px 20px',
          margin: 20,
          fontSize: '1em',
          border: 0,
          borderRadius: 5,
          color: '#f1f1f1',
          backgroundColor: '#c0392b',
          cursor: 'pointer',
          transitionDuration: '250ms',
      })
  }
});

export default getStyle;