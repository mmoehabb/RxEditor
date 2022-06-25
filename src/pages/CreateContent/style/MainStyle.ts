import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  mainDiv: {
    display: 'flex',
    height: '100vh',
  },

  contentDiv: {
    flex: 1,
    display: 'flex',
    flexFlow: 'column',
    justifyContent: mediaQuery('(min-width: 768px)') ? 'space-evenly' : 'start',
    alignItems: 'center',
    width: '70vw',
    paddingTop: mediaQuery('(min-width: 768px)') ? '' : '5vh',
    backgroundColor: '#f1f1f1',
  },

  exportBtn : {
    default: {
      padding: 20,
      border: 0,
      borderRadius: 5,
      boxShadow: '0 0 5px 1px #00000011',
      fontSize: '1em',
      color: '#fff',
      backgroundColor: '#10ac84',
      transition: '250ms',
      cursor: 'pointer',
    },
    hover: {
      backgroundColor: '#1dd1a1',
    },
  },
});

export default getStyle;