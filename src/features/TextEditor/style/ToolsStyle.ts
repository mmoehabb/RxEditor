/*
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
    overflow: 'auto',
  },
*/
const getStyle = (needSaving?: boolean) => ({
  root: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'start',
    height: 'auto',
    width: '100%',
    borderRadius: '20px 20px 0 0',
    boxShadow: '0 0 5px 1px #00000022',
    backgroundColor: '#f1f1f1',
    overflow: 'auto',
  },
  btn: {
    width: 'auto',
    padding: '1em',
    border: 0,
    cursor: 'pointer',
    transition: '250ms',
  },
  btnHover: {
      backgroundColor: '#00000011',
  },
  saveBtn: {
    width: 'auto',
    padding: '1em',
    border: 0,
    cursor: 'pointer',
    color: '#f1f1f1',
    backgroundColor: needSaving ? '#e74c3c' : '#00b894',
  },
});

export default getStyle;