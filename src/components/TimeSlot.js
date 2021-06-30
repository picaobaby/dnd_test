import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import WorkoutMove from './WorkoutMove'

function TimeSlot({groupId, dataGroup}) {
    return (
      <li className="event" data-date="7:00 - 8:00 AM">
        <h3>Opening Ceremony</h3>
        <p>Get ready for an exciting event, this will kick off in amazing fashion with MOP & Busta Rhymes as an opening show.</p>    
  
        <Droppable droppableId={`${groupId}`} direction="horizontal">
        {(provided, snapshot) => (
          <div className="droppable-area" ref={provided.innerRef} {...provided.droppableProps}>
          {dataGroup.map( (item, indexItem) => (
            <WorkoutMove item={item} indexItem={indexItem} key={indexItem} />
          ))}
          {provided.placeholder}
          </div>
        )}
        </Droppable>
      </li>
    )
}

export default TimeSlot
