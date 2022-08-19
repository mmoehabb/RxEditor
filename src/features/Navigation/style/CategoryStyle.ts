const getStyle = (dir: 'ltr' | 'rtl') => ({
  root: {
      display: 'flex',
      flexFlow: 'column',
      marginBottom: 25,
  },

  title: {
      display: 'flex',
      flexFlow: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px 0',
      borderBottom: 'solid #fff 2px',
      fontSize: '1em',
      color: '#fff',
      borderRadius: dir === 'ltr' ? '0 10px 0 0' : '10px 0 0 0',
      overflow: 'hidden',
  },

  addBtn: {
      height: '100%',
      fontSize: '1.25em',
      float: 'right',
      border: 0,
      padding: 4,
      color: 'inherit',
      backgroundColor: '#ffffff22',
      cursor: 'pointer',
  },

  item: {
      default: {
          width: '100%',
          padding: '5px 20px',
          marginBottom: 5,
          textAlign: 'inherit',
          border: 0,
          borderLeft: 0,
          borderRight: 0,
          borderRadius: 10,
          boxShadow: '0 0 5px 1px #00000022',
          color: '#fff',
          backgroundColor: '#c7ecee22',
          cursor: 'pointer',
          transition: '250ms',
      },
      hover: {
          color: '#0abde3',
          backgroundColor: '#f1f2f6',
      },
      selected: {
          color: '#01a3a4',
          backgroundColor: '#f1f2f6',
          borderLeft: dir === 'ltr' ? 'solid #01a3a4 15px' : 0,
          borderRight: dir === 'rtl' ? 'solid #01a3a4 15px' : 0,
      },
  },
})

export default getStyle;