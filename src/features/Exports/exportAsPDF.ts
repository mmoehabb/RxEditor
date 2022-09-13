import DataManagerModel from "../../DataManager/StrategyModel/Model";
import { loadContentInto } from "../TextEditor/functions/NodeFunctions";
import contentStyle from "../../media/content-styles/content-style-1";

const exportAsPDF = (dm: DataManagerModel) => {
  const myWindow = window.open('', 'PRINT');
  if (!myWindow) return;

  const divs = getContent(dm);
  myWindow.document.write('<!DOCTYPE HTML>')
  myWindow.document.write('<html>')
    myWindow.document.write('<head>')
      myWindow.document.write('<style>')
        myWindow.document.write(`html {
          direction: ${dm.getData().metadata.direction};
        }`);
        myWindow.document.write(contentStyle);
      myWindow.document.write('</style>')
    myWindow.document.write('</head>')
    myWindow.document.write('<body>')
      divs.forEach(div => myWindow.document.write(div.innerHTML));
    myWindow.document.write('</body>')
  myWindow.document.write('</html>')
  myWindow.document.close();

  myWindow.focus();
  myWindow.print();
}

const getContent = (dm: DataManagerModel): Array<HTMLDivElement> => {
  const divs: Array<HTMLDivElement> = [];

  const topics = dm.getData().topics.getList();

  topics.forEach(topic => {
    const div = document.createElement('div');
    div.appendChild(primeTitleElement(topic.label));

    const headlines = dm.getData().headlines.filter({
      topics: topic.id,
      headlines: -1,
      sections: -1
    });

    headlines.forEach(headline => {
      div.appendChild(secTitleElement(headline.label));

      const sections = dm.getData().sections.filter({
        topics: topic.id,
        headlines: headline.id,
        sections: -1
      });

      sections.forEach(section => loadContentInto(div, section.content));
    });

    divs.push(div);
  });
  
  return divs;
}

const primeTitleElement = (title: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = "primeTitleElement";
  div.innerText = title;
  return div;
}

const secTitleElement = (title: string): HTMLDivElement => {
  const div = document.createElement('div');
  div.className = "secTitleElement";
  div.innerText = title;
  return div;
}

export default exportAsPDF;