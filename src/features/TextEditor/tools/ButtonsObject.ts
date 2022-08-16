import { 
  BsFillBrushFill,
  BsListOl, 
  BsListUl, 
  BsTypeBold,
  BsTypeItalic,
  BsLink45Deg,
  BsImage,
  BsPlusSquareDotted,
  BsCodeSlash
} from "react-icons/bs";

import { FaHeading } from "react-icons/fa"
import { 
  RiHeading, 
  RiDoubleQuotesR 
} from "react-icons/ri"
import { CgFormatHeading } from "react-icons/cg"
import { VscNote } from "react-icons/vsc"

import { add, addTagWithAttributes } from "../functions/NodeFunctions";

export const buttonsData = [
  {
    func: () => add("h1", "Header 1"),
    img: FaHeading,
  },
  {
    func: () => add("h2", "Header 2"),
    img: RiHeading,
  },
  {
    func: () => add("h3", "Header 3"),
    img: CgFormatHeading,
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
    func: () => add("code", "", true),
    img: BsCodeSlash,
  },
  {
    func: () => add("ol", "<li></li>"),
    img: BsListOl,
  },
  {
    func: () => add("ul", "<li></li>"),
    img: BsListUl,
  },
  {
    func:() => add("mark", "", true),
    img: BsFillBrushFill,
  },
  {
    func:() => add("q", "", true),
    img: RiDoubleQuotesR,
  },
  {
    func:() => add("note", "", true),
    img: VscNote,
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
