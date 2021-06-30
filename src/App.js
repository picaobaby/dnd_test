import React, { useState } from 'react'
import { DragDropContext } from "react-beautiful-dnd";
import TimeSlot from './components/TimeSlot'
import "./index.css"
import initData from './data_new.json'
// import PortalTest from './components/PortalTest';

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
    <div id="content">
      <h1>Workout Scheduling</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
      <ul className="timeline">
        {Object.keys(data).map((groupId, indexGroup) => {
          const dataGroup = data[groupId]
          return <TimeSlot dataGroup={dataGroup} groupId={groupId} key={indexGroup} />
        })}
      </ul>
      </DragDropContext>

      {/* <PortalTest flag="false"/> */}
    </div>
  )
}

export default App
