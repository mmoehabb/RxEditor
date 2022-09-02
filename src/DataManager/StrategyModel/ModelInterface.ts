import Headlines from "../Datalist/lists/Headlines";
import Sections from "../Datalist/lists/Sections";
import Topics from "../Datalist/lists/Topics";

import Headline from "../types/Headline";
import Section from "../types/Section";
import Selections from "../types/Selections";
import Topic from "../types/Topic";

export type metadata = {
  direction: 'rtl' | 'ltr'
}

export type Data = {
  metadata: metadata,
  topics: Topics;
  headlines: Headlines;
  sections: Sections;
}

export type JSONData = {
  metadata: metadata,
  topics: {list: Array<Topic>},
  headlines: {list: Array<Headline>},
  sections: {list: Array<Section>},
}

declare interface ModelInterface {
  getData(): Data;
  setData(data: Data): void;

  getDataAsJSON(): JSON;
  loadDataFromJSON(jsonData: JSONData): void;

  getMetadata(): metadata;
  setMetadata(meta: Partial<metadata>): void;

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