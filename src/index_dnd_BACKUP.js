import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./index.css"

import initData from './data_new.json'
console.log(initData)

// just testing obj mapping, remove later
Object.keys(initData).map((key, indexGroup) => {
  console.log(key)
  console.log(initData[key])

  initData[key].map((item, indexItem) => {
    console.log("item --- " + item.id)
  })
})

function App() {
  const [data, setData] = useState(initData)

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newData     = {...data}   // this works, Array.from() does not work
    const fromGroup   = result.source.droppableId
    const toGroup     = result.destination.droppableId
    const fromIndex   = result.source.index
    const toIndex     = result.destination.index
    const dataFrom    = Array.from(newData[fromGroup])
    const dataTo      = Array.from(newData[toGroup])
  
    // move inside 
    if (fromGroup === toGroup) {
      const [removed] = dataFrom.splice(fromIndex, 1)
      dataFrom.splice(toIndex, 0, removed)
      newData[fromGroup] = dataFrom
      setData(newData)
    } 
    // move between groups
    else {
      const [removed] = dataFrom.splice(fromIndex, 1)
      dataTo.splice(toIndex, 0, removed)
      newData[fromGroup] = dataFrom
      newData[toGroup] = dataTo
      setData(newData)
    }
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
      {Object.keys(data).map((groupId, indexGroup) => {
        const dataGroup = data[groupId]

        return (
          <Droppable droppableId={`${groupId}`} key={groupId}>
          {(provided, snapshot) => (
              <div className="group-container" ref={provided.innerRef} {...provided.droppableProps}>
                group -- {groupId}

                {dataGroup.map( (item, indexItem) => (
                  <Draggable draggableId={`${item.id}`} index={indexItem} key={item.id}>
                  {(provided, snapshot) => (
                    <div className="item-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      item -- {item.name}
                    </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
          )}
          </Droppable>
        )
      })}
      </DragDropContext>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
