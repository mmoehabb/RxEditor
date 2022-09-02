import DataManagerModel from "../../../DataManager/StrategyModel/Model";
import SelectionsInterface from "../../../DataManager/types/Selections";
import Button from "../../../MiniComponents/Button";
import getStyle from "../style/CategoryStyle";
import ItemButton from "./ItemButton";

interface Props {
    category: "topics" | "headlines" | "sections";
    dataManager: DataManagerModel;
    viewMode?: boolean;
}

const CategoryGroup = ({dataManager, category, viewMode}: Props) => {
    const style = getStyle(dataManager.getMetadata().direction);
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
        const newSel = dataManager.getSelections();
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
                <label>{category.toUpperCase()}</label>
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
					<ItemButton 
						key={i}
						index={obj.id}
						category={category}
						data={obj} 
						selectedItemId={selectedItemId}
						style={style} 
						onSelect={() => onSelect(obj.id)}
						onMove={(from, to) => dataList.placeE1BehindE2(from, to)}
					/>
                )}
            </div>
        </div>
    );
}

export default CategoryGroup;