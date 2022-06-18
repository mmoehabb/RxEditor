import DatalistInterface from "../Interfaces/DatalistInterface";
import Headline from "../Interfaces/HeadlineInterface";
import Selections from "../Interfaces/SelectionsInterface";

class Headlines extends DatalistInterface<Headline> {
  getList() {
    return super.getList() as Array<Headline>;
  }

  add(selections: Selections) {
    // Ensure that: there's a topic been selected 
    // to add the section in.
    if (selections.topics < 0) return; 
    
    let newId = 0;
    this.getList().forEach(
      (headline) => newId += headline.id
    );
    newId += 1;

    const newHeadline: Headline = {
      id: newId,
      label: "New Headline",
      topicId: selections.topics,
    };

    const newHeadlinesList = this.getList().map((headline) => ({...headline}));
    newHeadlinesList.push(newHeadline);
    this.setList(newHeadlinesList);

    this.dispatchUpdate();
  };

  filter(selections: Selections) {
    return this.getList().filter(
      (headline) => headline.topicId === selections.topics
    );
  }
}

export default Headlines;