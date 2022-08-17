import DatalistInterface from "../Datalist";
import Selections from "../../types/Selections";
import Topic from "../../types/Topic";

class Topics extends DatalistInterface<Topic> {
  add() {
    let newId = 0;
    this.getList().forEach(
      (topic) => newId += topic.id
    );
    newId += 1;

    const newTopic: Topic = {
      id: newId,
      label: "New Topic",
    };

    const newTopicsList = this.getList().map((topic) => ({...topic}));
    newTopicsList.push(newTopic);
    this.setList(newTopicsList);

    this.dispatchUpdate();
  }

  filter(selections: Selections) {
    return this.getList();
  }
}

export default Topics;