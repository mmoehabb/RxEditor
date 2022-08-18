import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    
    width: mediaQuery('(min-width: 1024px)') ? '20%' : '20em',
    height: '100vh',
    padding: 15,
    boxSizing: 'border-box' as 'border-box',
    color: '#f6f6f6',
    background: 'linear-gradient(#3BAFB7, #4EAED7)',
    overflow: 'auto',

    position: (mediaQuery('(min-width: 1024px)') ? '' : 'absolute') as 'absolute',
  },

  showBtn: {
    position: 'absolute' as 'absolute',
    width: 50,
    height: 50,
    borderRadius: '0 0 45px 0',
    cursor: 'pointer',
    backgroundColor: '#3BAFB7',
  },

  children: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
  },
});

export default getStyle;