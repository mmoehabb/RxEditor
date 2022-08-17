import Headline from "../types/Headline";
import Section from "../types/Section";
import Selections from "../types/Selections";
import Topic from "../types/Topic";

type DataTypes = Topic | Section | Headline;

export default class DatalistInterface<T extends DataTypes> {
  private list: Array<T> = [];
  private updateCallback: Function | undefined;
  
  constructor(updateCallback?: Function) {
    this.updateCallback = updateCallback;
  }

  setUpdateCallback(updateCallback: Function) {
    this.updateCallback = updateCallback;
  }

  getList() {
    return this.list;
  }
  setList(newList: Array<T>) {
    this.list = newList;
  }
  
  get(id: number) {
    return this.list.filter((elem) => elem.id === id)[0];
  }

  remove(id: number) {
    const newList = this.list.filter((elem) => elem.id !== id);
    this.list = newList;
  }

  modify(id: number, changes: object) {
    const newList = this.list.map((elem) => {
      if (elem.id !== id) return {...elem}
      else return {...elem, ...changes}
    });
    this.list = newList;
  }

  toList() {
    return this.list;
  }

  // instable functions
  add(selections?: Selections){};
  filter(selections: Selections){};

  // invoke the updateCallback for the user...
  // used in updating the views.
  dispatchUpdate() {
    if (this.updateCallback) this.updateCallback();
  }
}
