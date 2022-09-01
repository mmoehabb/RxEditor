import Button from "../../../MiniComponents/Button";

type Props = {
  index: number;
  category: string;
  data: any;
  selectedItemId: number;
  style: any;
  onSelect: Function;
  onMove: (from: number, to: number) => void;
}

const ItemButton = (props: Props) => {      

  const onDragStartHandler = (e: any) => {
    e.dataTransfer?.setData('dragged-index', props.index.toString());
    e.dataTransfer?.setData('category', props.category);
  }

  const onDragOverHandler = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
  }

  const onDropHandler = (e: any) => {
    const draggedCategory = e.dataTransfer.getData('category');
    if (draggedCategory === props.category) {
      const from = e.dataTransfer.getData('dragged-index');
      const to = e.target.parentElement.dataset.index;
      props.onMove(from, to);
    }
  }

  return (
    <div
    data-index={props.index}
    data-category={props.category}
    onDragStart={onDragStartHandler}
    onDragOver={onDragOverHandler}
    onDrop={onDropHandler}
    draggable>
      <Button 
          label={props.data.label} 
          style={props.data.id === props.selectedItemId ? 
              props.style.item.selected : {}
          }
          mainStyle={props.style.item.default}
          hoverStyle={props.style.item.hover}
          onClick={() => props.onSelect()}
      />
    </div>
  );
}

export default ItemButton;