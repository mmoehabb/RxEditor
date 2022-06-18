import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  root: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    padding: '20px 40px',
    boxSizing: 'border-box' as 'border-box',
    color: '#f6f6f6',
    background: 'linear-gradient(#3BAFB7, #4EAED7)',
    overflow: 'auto',

    position: (mediaQuery('(min-width: 768px)') ? '' : 'absolute') as 'absolute',
    width: mediaQuery('(min-width: 768px)') ? '60vw' : '200px',
    height: '100vh',
  },

  showBtn: {
    position: 'absolute' as 'absolute',
    width: 70,
    left: -40,
    top: '45%',
    cursor: 'pointer',
  },
});

export default getStyle;