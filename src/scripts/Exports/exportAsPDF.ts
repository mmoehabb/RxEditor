import DataManagerModel from "../../DataManager/Classes/Model";
import { loadContentInto } from "../../features/TextEditor/functions/NodeFunctions";

const exportAsPDF = (dm: DataManagerModel) => {
  const myWindow = window.open('', 'PRINT');
  if (!myWindow) return;

  const div = getContent(dm);
  myWindow.document.write('<html>')
    myWindow.document.write('<head>')
      myWindow.document.write('<style>')
        myWindow.document.write(getCSS());
      myWindow.document.write('</style>')
    myWindow.document.write('</head>')
    myWindow.document.write('<body>')
      myWindow.document.write(div.innerHTML);
    myWindow.document.write('</body>')
  myWindow.document.write('</html>')
  myWindow.document.close();

  myWindow.focus();
  myWindow.print();
}

const getContent = (dm: DataManagerModel): HTMLDivElement => {
  const div = document.createElement('div');
  const sections = dm.getData().sections.getList();
  sections.forEach(section => loadContentInto(div, section.content))
  return div;
}

const getCSS = (): string => {
  return `
    h1 {
      color: #dd5ab5;
    }

    p {
      color: #123321;
    }
  `;
}

export default exportAsPDF;