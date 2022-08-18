const getStyle = () => ({
  secDiv: {
      display: 'flex', 
      flexFlow: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box' as 'border-box',
      overflow: 'hidden',
  },

  topDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
  },

  labelDiv: {
      flex: 9,
      display: "flex",
      flexFlow: "row",
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 20,
      boxSizing: 'border-box' as 'border-box',
      boxShadow: '0 0 10px 2px #00000022',
      overflow: 'hidden',
  },

  labelInput: {
      flex: 8,
      textAlign: 'center' as 'center',
      fontSize: '1em',
      fontWeight: 'bold',
      padding: 15,
      border: 0,
      color: '#666',
      backgroundColor: '#f6f6f6',
  },

  removeBtn: (mode?: string) => {
      if (mode === "hover") return ({
          boxShadow: '0 0 5px 2px #00000033'
      })
      else return ({
          flex: 1,
          fontSize: '1em',
          padding: 10,
          border: 0,
          color: '#f1f1f1',
          backgroundColor: '#c0392b',
          cursor: 'pointer',
          transitionDuration: '250ms',
      })
  },

  sortBtnsDiv: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sortBtn: {
    cursor: 'pointer',
  },

  editorContainer: {
    height: '80%',
    width: '90%',
    alignSelf: 'center',
  }, 
});

export default getStyle;