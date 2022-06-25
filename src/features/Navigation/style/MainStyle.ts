import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    
    width: '15em',
    height: '100vh',
    padding: 10,
    
    boxSizing: 'border-box' as 'border-box',
    color: '#f6f6f6',
    background: 'linear-gradient(#3BAFB7, #4EAED7)',
    overflow: 'auto',

    position: (mediaQuery('(min-width: 768px)') ? '' : 'absolute') as 'absolute',
  },

  showBtn: {
    position: 'absolute' as 'absolute',
    width: 70,
    left: -40,
    top: '45%',
    cursor: 'pointer',
  },

  children: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
  },
});

export default getStyle;