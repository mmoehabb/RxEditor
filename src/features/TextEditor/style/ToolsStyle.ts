const getStyle = (needSaving?: boolean) => ({
  root: {
    flex: 1,
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    alignSelf: 'end',
    justifyContent: 'center',
    margin: 20,
    padding: '30px 0',
    borderRadius: 20,
    boxShadow: '0 0 5px 1px #00000022',
    backgroundColor: '#dfe6e9',
  },
  btn: {
    width: 'auto',
    padding: '1em',
    margin: 5,
    border: 0,
    cursor: 'pointer',
    backgroundColor: '#b2bec3',
    transition: '250ms',
  },
  btnHover: {
      backgroundColor: '#636e72',
  },
  saveBtn: {
    width: '35%',
    padding: '1em',
    margin: 5,
    border: 0,
    cursor: 'pointer',
    color: '#f1f1f1',
    backgroundColor: needSaving ? '#e74c3c' : '#00b894',
  },
});

export default getStyle;