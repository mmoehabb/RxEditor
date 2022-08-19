import Selections from "../types/Selections";
import Topics from "../Datalist/lists/Topics";
import Headlines from "../Datalist/lists/Headlines";
import Sections from "../Datalist/lists/Sections";

import { abstractNode, getNodeFromAbstract } from "../Functions/ContentManipulation";
import ModelInterface, { Data, JSONData, metadata } from "./ModelInterface";

class DataManagerModel implements ModelInterface {
  private data: Data;
  private selections: Selections;
  private updateCallback: Function | undefined;

  constructor(updateCallback?: Function, data?: Data, selections?: Selections) {
    this.updateCallback = updateCallback;

    this.data ={
      metadata: data?.metadata || {direction: 'ltr'},
      topics: data?.topics || new Topics(),
      headlines: data?.headlines || new Headlines(),
      sections: data?.sections || new Sections(),
    }

    if (updateCallback) {
      data?.topics.setUpdateCallback(updateCallback);
      data?.headlines.setUpdateCallback(updateCallback);
      data?.sections.setUpdateCallback(updateCallback);
    }

    this.selections = selections ? {...selections} : {
      topics: -1,
      headlines: -1,
      sections: -1,
    }
  }

  getData() {
    return this.data;
  }

  setData(data: Data) {
    this.data = data;
  }

  getDataAsJSON(): JSON {
    const json = JSON.parse(JSON.stringify(this.data));
    json.sections = {list: []};

    // JSON.stringify function cannot handle Nodes Objects,
    // handle Nodes in sections list manually.
    // sections: {list: [{nodeName, childNodes},...]}
    for (let section of this.data.sections.getList()) {
      const content = [];

      for (let node of section.content)
        content.push(abstractNode(node as HTMLElement));

      json.sections.list.push({
        ...section,
        content
      });
    }

    return json;
  }

  loadDataFromJSON(jsonData: JSONData) {
    Object.assign(this.data.metadata, jsonData.metadata);
    this.data.topics.setList(jsonData.topics.list)
    this.data.headlines.setList(jsonData.headlines.list)

    const sectionsList = [];

    for (let section of jsonData.sections.list) {
      const content = [];
      for (let absNode of section.content)
        content.push(getNodeFromAbstract(absNode));

      sectionsList.push({
        ...section,
        content
      });
    }

    this.data.sections.setList(sectionsList);
    if (this.updateCallback) this.updateCallback();
  }

  getMetadata() {
    const meta = {};
    Object.assign(meta, this.data.metadata);
    return meta as metadata;
  }

  setMetadata(newmeta: Partial<metadata>) {
    Object.assign(this.data.metadata, newmeta);
    if (this.updateCallback) this.updateCallback();
  }

  getSelections() {
    const obj = {}
    Object.assign(obj, this.selections);
    return obj as Selections;
  }

  setSelections(newSelections: Selections) {
    Object.assign(this.selections, newSelections);
    if (this.updateCallback) this.updateCallback();
  }

  /* Topics Functions */
  getSelectedTopic() {
    const selectedTopicId = this.selections.topics;
    const selectedTopic = this.data.topics.get(selectedTopicId);
    return selectedTopic;
  }

  modifySelectedTopic(label: string) {
    const topicId = this.selections.topics;
    const {topics} = this.data;
    topics.modify(topicId, {label});

    if (this.updateCallback) this.updateCallback();
  }

  removeSelectedTopic() {
    const {topics, headlines, sections} = this.data;

    topics.remove(this.selections.topics);
    headlines.filter(this.selections).forEach((headline) => {
        headlines.remove(headline.id);
        sections.filter({...this.selections, headlines: headline.id})
        .forEach((section) => sections.remove(section.id));
      }
    );

    this.setSelections({
      topics: -1,
      headlines: -1,
      sections: -1,
    })
  }

  moveSelectedTopicUp() {
    const selected = this.getSelectedTopic();
    this.data.topics.moveElementUp(selected.id);
  }

  moveSelectedTopicDown() {
    const selected = this.getSelectedTopic();
    this.data.topics.moveElementDown(selected.id);
  }

  /* Headlines Functions */
  getSelectedHeadline() {
    const selectedHeadlineId = this.selections.headlines;
    const selectedHeadline = this.data.headlines.get(selectedHeadlineId);
    return selectedHeadline;
  }

  modifySelectedHeadline(label: string) {
    const headlineId = this.selections.headlines;
    const {headlines} = this.data;
    headlines.modify(headlineId, {label});

    if (this.updateCallback) this.updateCallback();
  }

  removeSelectedHeadline() {
    const {headlines, sections} = this.data;

    headlines.remove(this.selections.headlines);
    sections.filter(this.selections).forEach(
      (section) => sections.remove(section.id)
    );

    this.setSelections({
      topics: this.selections.topics,
      headlines: -1,
      sections: -1,
    })
  }

  moveSelectedHeadlineUp() {
    const selected = this.getSelectedHeadline();
    this.data.headlines.moveElementUp(selected.id);
  }

  moveSelectedHeadlineDown() {
    const selected = this.getSelectedHeadline();
    this.data.headlines.moveElementDown(selected.id);
  }

  /* Sections Functions */
  getSelectedSection() {
    const selectedSectionId = this.selections.sections;
    const selectedSection = this.data.sections.get(selectedSectionId);
    return selectedSection;
  }
  
  modifySelectedSection(label: string) {
    const sectionId = this.selections.sections;
    const {sections} = this.data;
    sections.modify(sectionId, {label});

    if (this.updateCallback) this.updateCallback();
  }

  modifySelectedSectionContent(content: Array<Node>) {
    const sectionId = this.selections.sections;
    const {sections} = this.data;
    sections.modify(sectionId, {content});

    if (this.updateCallback) this.updateCallback();
  }

  removeSelectedSection() {
    const {sections} = this.data;
    sections.remove(this.selections.sections);

    this.setSelections({
      topics: this.selections.topics,
      headlines: this.selections.headlines,
      sections: -1,
    })
  }

  moveSelectedSectionUp() {
    const selected = this.getSelectedSection();
    this.data.sections.moveElementUp(selected.id);
  }

  moveSelectedSectionDown() {
    const selected = this.getSelectedSection();
    this.data.sections.moveElementDown(selected.id);
  }

  clone(): DataManagerModel {
    return new DataManagerModel(
      this.updateCallback,
      this.data,
      this.selections,
    );
  }
}

export default DataManagerModel;