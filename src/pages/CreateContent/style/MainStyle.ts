import mediaQuery from "../../../scripts/mediaQuery";

const getStyle = () => ({
  mainDiv: {
      display: 'flex',
      height: '100vh',
  },
  contentDiv: {
      flex: 3,
      display: 'flex',
      flexFlow: 'column',
      justifyContent: mediaQuery('(min-width: 768px)') ? 'space-evenly' : 'start',
      alignItems: 'center',
      width: '70vw',
      paddingTop: mediaQuery('(min-width: 768px)') ? '' : '5vh',
      backgroundColor: '#f1f1f1',
  },
});

export default getStyle;