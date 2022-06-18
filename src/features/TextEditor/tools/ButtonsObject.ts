import { 
  BsFillBrushFill,
  BsFonts, 
  BsListOl, 
  BsListUl, 
  BsTypeBold,
  BsTypeItalic,
  BsLink45Deg,
  BsImage,
  BsPlusSquareDotted
} from "react-icons/bs";

import { add, addTagWithAttributes } from "../functions/NodeFunctions";

export const buttonsData = [
  {
    func: () => add("h1", "Header", true),
    img: BsFonts,
  },
  {
    func: () => add("strong", "", true),
    img: BsTypeBold,
  },
  {
    func: () => add("em", "", true),
    img: BsTypeItalic,
  },
  {
    func: () => add("ol", "<li></li>", false),
    img: BsListOl,
  },
  {
    func: () => add("ul", "<li></li>", false),
    img: BsListUl,
  },
  {
    func:() => add("mark", "", true),
    img: BsFillBrushFill,
  },
  {
    func:() => addTagWithAttributes("a", ["href"]),
    img: BsLink45Deg,
  },
  {
    func:() => addTagWithAttributes("img", ["src", "width", "height"]),
    img: BsImage  
  },
  {
    func:() => addTagWithAttributes("", []),
    img: BsPlusSquareDotted 
  }
]
