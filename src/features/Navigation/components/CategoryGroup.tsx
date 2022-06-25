import DataManagerModel from "../../../DataManager/Classes/Model";
import SelectionsInterface from "../../../DataManager/Interfaces/SelectionsInterface";
import Button from "../../../MiniComponents/Button";
import getStyle from "../style/CategoryStyle";

interface Props {
    category: "topics" | "headlines" | "sections";
    dataManager: DataManagerModel;
    viewMode?: boolean;
}

const CategoryGroup = ({dataManager, category, viewMode}: Props) => {
    const style = getStyle();
    const dataList = dataManager.getData()[category];
    const collection = dataList.filter(dataManager.getSelections());
    const selectedItemId = dataManager.getSelections()[category];

    const getFirstHeadlineId = (sel: SelectionsInterface) => {
        const headlines = dataManager.getData().headlines;
        const filtered = headlines.filter(sel);
        return filtered[0].id;
    }

    const getFirstSectionId = (sel: SelectionsInterface) => {
        const sections = dataManager.getData().sections;
        const filtered = sections.filter(sel);
        return filtered[0].id;
    }

    const onSelect = (id: number) => {
        const newSel = {...dataManager.getSelections()};
        newSel[category] = id;

        if (category === "topics") {
            newSel['headlines'] = viewMode ? getFirstHeadlineId(newSel) : -1;
            newSel['sections'] = viewMode ? getFirstSectionId(newSel) : -1;
        }
        else if (category === "headlines") {
            newSel['sections'] = viewMode ? getFirstSectionId(newSel) : -1;
        }

        dataManager.setSelections(newSel);
    }

    const onAdd = () => {
        const selections = dataManager.getSelections();
        dataManager.getData()[category].add(selections);
    }

    return (
        <div style={style.root}>
            <div style={style.title}>
                {category.toUpperCase()}
                {viewMode ||
                    <Button 
                        label={"+"} 
                        mainStyle={style.addBtn}
                        hoverStyle={{}}
                        onClick={onAdd}
                />}
            </div>
            <div>
                {collection.map((obj, i) => 
                    <Button 
                        key={i}
                        label={obj.label} 
                        style={obj.id === selectedItemId ? 
                            style.item.selected : {}
                        }
                        mainStyle={style.item.default}
                        hoverStyle={style.item.hover}
                        onClick={() => onSelect(obj.id)}
                    />
                )}
            </div>
        </div>
    );
}

export default CategoryGroup;