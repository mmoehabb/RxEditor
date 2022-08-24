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

import { 
  FaAlignCenter, 
  FaAlignJustify, 
  FaAlignLeft, 
  FaAlignRight, 
  FaHeading, 
  FaRemoveFormat 
} from "react-icons/fa"

import { 
  RiHeading, 
  RiDoubleQuotesR 
} from "react-icons/ri"

import { CgFormatHeading } from "react-icons/cg"
import { VscNote } from "react-icons/vsc"
import { AiFillFormatPainter, AiOutlineFormatPainter } from "react-icons/ai"

import { add, addStyle, addTagWithAttributes, modifyStyle, setStyle } from "../functions/NodeFunctions";

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
  // text-align: left
  {
    func:() => setStyle("textAlign", "left"),
    img: FaAlignLeft
  },
  // text-align: center
  {
    func:() => setStyle("textAlign", "center"),
    img: FaAlignCenter
  },
  // text-align: right
  {
    func:() => setStyle("textAlign", "right"),
    img: FaAlignRight
  },
  // text-align: justify
  {
    func:() => setStyle("textAlign", "justify"),
    img: FaAlignJustify
  },
  // remove styles
  {
    func:() => modifyStyle("opacity: 1;"),
    img: FaRemoveFormat
  },
  // override custome style
  {
    func:() => modifyStyle(),
    img: AiFillFormatPainter
  },
  // add custome style
  {
    func:() => addStyle(""),
    img: AiOutlineFormatPainter
  },
  {
    func:() => addTagWithAttributes("", []),
    img: BsPlusSquareDotted
  }
]
