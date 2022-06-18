import DataManagerModel from "../DataManager/Classes/Model";
import SelectionsInterface from "../DataManager/Interfaces/SelectionsInterface";
import Button from "../MiniComponents/Button";

interface Props {
    category: "topics" | "headlines" | "sections";
    dataManager: DataManagerModel;
    viewModel?: boolean;
}

const CategoryGroup = ({dataManager, category, viewModel}: Props) => {
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
            newSel['headlines'] = viewModel ? getFirstHeadlineId(newSel) : -1;
            newSel['sections'] = viewModel ? getFirstSectionId(newSel) : -1;
        }
        else if (category === "headlines") {
            newSel['sections'] = viewModel ? getFirstSectionId(newSel) : -1;
        }

        dataManager.setSelections(newSel);
    }

    const onAdd = () => {
        const selections = dataManager.getSelections();
        dataManager.getData()[category].add(selections);
    }

    return (
        <div style={style.groupDiv}>
            <label style={style.label}>
                {category.toUpperCase()}
            </label>
            <div>
                {collection.map((obj, i) => 
                    <Button 
                        key={i}
                        label={obj.label} 
                        style={obj.id === selectedItemId ? 
                            {backgroundColor: '#fff'} : {}
                        }
                        mainStyle={style.btn}
                        hoverStyle={{backgroundColor: '#fff'}}
                        onClick={() => onSelect(obj.id)}
                    />
                )}
            </div>
            {viewModel ||
            <Button 
                label={`+ Add ${category}`} 
                mainStyle={style.addBtn}
                hoverStyle={{
                    backgroundColor: '#222'
                }}
                onClick={onAdd}
            />}
        </div>
    );
}

export default CategoryGroup;

const getStyle = () => ({
    groupDiv: {
        display: 'flex',
        flexFlow: 'column',
        marginBottom: 25,
    },

    label: {
        margin: 10,
        fontSize: '1.5em',
    },

    btn: {
        width: '100%',
        padding: 7.5,
        marginBottom: 5,
        border: 0,
        borderRadius: 5,
        fontSize: '1em',
        cursor: 'pointer',
        transition: '250ms',
        color: '#3BAFB7',
        backgroundColor: '#ffffffaa',
        boxShadow: 'inset 0 0 2px 1px #3BAFB7',
    },
    addBtn: {
        width: '100%',
        padding: 10,
        border: 0,
        borderRadius: 10,
        fontSize: '1em',
        cursor: 'pointer',
        transition: '250ms',
        color: '#3BAFB7',
        backgroundColor: '#00000066',
    }
})