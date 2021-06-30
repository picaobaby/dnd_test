import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

function WorkoutMove({item, indexItem}) {
    return (
      <Draggable draggableId={`${item.id}`} index={indexItem}>
      {(provided, snapshot) => (
        <a href="/" className="drag" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <img className="workout_thumb" src="./images/1.jpg" alt="" />
        </a>
        )}
      </Draggable>
    )
}

export default WorkoutMove
