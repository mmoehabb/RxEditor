import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  secDiv: {
      display: 'flex', 
      flexFlow: 'column',
      width: '100%',
      height: '100%',
      padding: 20,
      boxSizing: 'border-box' as 'border-box',
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
      fontSize: '1em',
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
  },

  sortBtnsDiv: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    padding: 10,
  },

  sortBtn: {
    cursor: 'pointer',
  },

  editorContainer: {
    height: '85%',
  }, 
});

export default getStyle;