import Headlines from "../Classes/Headlines";
import Sections from "../Classes/Sections";
import Topics from "../Classes/Topics";

import Headline from "./HeadlineInterface";
import Section from "./SectionInterface";
import Selections from "./SelectionsInterface";
import Topic from "./TopicInterface";

export type Data = {
  topics: Topics;
  headlines: Headlines;
  sections: Sections;
}

export type JSONData = {
  topics: {list: Array<Topic>},
  headlines: {list: Array<Headline>},
  sections: {list: Array<Section>},
}

declare interface ModelInterface {
  getData(): Data;
  setData(data: Data): void;

  getDataAsJSON(): JSON;
  loadDataFromJSON(jsonData: JSONData): void;

  getSelections(): Selections;
  setSelections(newSelections: Selections): void;

  getSelectedTopic(): Topic;
  modifySelectedTopic(label: string): void;
  removeSelectedTopic(): void;

  getSelectedHeadline(): Headline;
  modifySelectedHeadline(label: string): void;
  removeSelectedHeadline(): void;

  getSelectedSection(): Section;
  modifySelectedSection(label: string): void;
  modifySelectedSectionContent(content: Array<Node>): void;
  removeSelectedSection(): void;

  clone(): ModelInterface;
}

export default ModelInterface;