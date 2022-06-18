const getStyle = (needSaving?: boolean) => ({
  root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap' as 'wrap',
      height: 'auto',
      padding: '0 10px',
      backgroundColor: '#d9d9d9',
  },
  btn: {
      padding: '1em',
      border: 0,
      cursor: 'pointer',
      backgroundColor: '#d9d9d9',
  },
  btnHover: {
      backgroundColor: '#fff',
  },
  saveBtn: {
      width: '100px',
      border: 0,
      cursor: 'pointer',
      color: '#f1f1f1',
      backgroundColor: needSaving ? '#e74c3c' : '#00b894',
  },
});

export default getStyle;