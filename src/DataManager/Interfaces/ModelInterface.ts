import Headlines from "../Classes/Headlines";
import Sections from "../Classes/Sections";
import Topics from "../Classes/Topics";

import Headline from "../types/Headline";
import Section from "../types/Section";
import Selections from "../types/Selections";
import Topic from "../types/Topic";

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
  moveSelectedTopicUp(): void;
  moveSelectedTopicDown(): void;

  getSelectedHeadline(): Headline;
  modifySelectedHeadline(label: string): void;
  removeSelectedHeadline(): void;
  moveSelectedHeadlineUp(): void;
  moveSelectedHeadlineDown(): void;

  getSelectedSection(): Section;
  modifySelectedSection(label: string): void;
  modifySelectedSectionContent(content: Array<Node>): void;
  removeSelectedSection(): void;
  moveSelectedSectionUp(): void;
  moveSelectedSectionDown(): void;

  clone(): ModelInterface;
}

export default ModelInterface;