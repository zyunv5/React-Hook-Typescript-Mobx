import * as React from "react"

import {todoItemInterface} from "./types"

export const TodoItem:React.FC<todoItemInterface>=({id,text,completed})=>(
  <div style={{textDecoration:completed?'line-through':'none'}}>{text}</div>
)