import Headline from "../types/Headline";
import Section from "../types/Section";
import Selections from "../types/Selections";
import Topic from "../types/Topic";

type DataTypes = Topic | Section | Headline;

abstract class DatalistInterface<T extends DataTypes> {
  private list: Array<T> = [];
  private updateCallback: Function | undefined;
  
  constructor(updateCallback?: Function) {
    this.updateCallback = updateCallback;
  }

  setUpdateCallback(updateCallback: Function) {
    this.updateCallback = updateCallback;
  }

  getList() {
    return Array.from(this.list);
  }
  setList(newList: Array<T>) {
    this.list = newList;
    this.dispatchUpdate();
  }
  
  get(id: number) {
    return this.list.filter((elem) => elem.id === id)[0];
  }

  remove(id: number) {
    const newList = this.list.filter((elem) => elem.id !== id);
    this.list = newList;
    this.dispatchUpdate();
  }

  modify(id: number, changes: object) {
    const newList = this.list.map((elem) => {
      if (elem.id !== id) return {...elem}
      else return {...elem, ...changes}
    });
    this.list = newList;
    this.dispatchUpdate();
  }

  moveElementUp(id: number) {
    const topics = this.getList();
    topics.every((topic, i) => {
      if (topic.id === id) {
        if (topics[i-1]) {
          const tmp = topics[i-1];
          topics[i-1] = topics[i];
          topics[i] = tmp;
        }
        return false; // break;
      }
      return true; // continue
    });
    this.setList(topics);
  }

  moveElementDown(id: number) {
    const topics = this.getList();
    topics.every((topic, i) => {
      if (topic.id === id) {
        if (topics[i+1]) {
          const tmp = topics[i+1];
          topics[i+1] = topics[i];
          topics[i] = tmp;
        }
        return false; // break;
      }
      return true; // continue
    });
    this.setList(topics);
  }

  // unstable functions
  add(selections?: Selections){};
  filter(selections: Selections){};

  // invoke the updateCallback for the user...
  // used in updating the views.
  dispatchUpdate() {
    if (this.updateCallback) this.updateCallback();
  }
}

export default DatalistInterface;