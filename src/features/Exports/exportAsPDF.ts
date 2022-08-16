import DataManagerModel from "../../DataManager/Classes/Model";
import { loadContentInto } from "../TextEditor/functions/NodeFunctions";
import contentStyle from "../../media/content-styles/content-style-1";

const exportAsPDF = (dm: DataManagerModel) => {
  const myWindow = window.open('', 'PRINT');
  if (!myWindow) return;

  const div = getContent(dm);
  myWindow.document.write('<html>')
    myWindow.document.write('<head>')
      myWindow.document.write('<style>')
        myWindow.document.write(contentStyle);
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

  const topics = dm.getData().topics;
  topics.getList().forEach(topic => {
    div.appendChild(titlePage(topic.label));

    const headlines = dm.getData().headlines.filter({
      topics: topic.id,
      headlines: -1,
      sections: -1
    });
    headlines.forEach(headline => {
      const sections = dm.getData().sections.filter({
        topics: topic.id,
        headlines: headline.id,
        sections: -1
      });
      sections.forEach(section => loadContentInto(div, section.content));
    });

    div.appendChild(emptyPage());
  });
  
  return div;
}

const titlePage = (title: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.setAttribute('style', `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    font-size: 200%;
    font-weight: bold;
  `);
  div.innerText = title;
  return div;
}

const emptyPage = (text?: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.style.width = '100vw';
  div.style.height = '100vh';
  return div;
}

export default exportAsPDF;