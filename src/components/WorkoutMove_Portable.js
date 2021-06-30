import React from 'react'
import ReactDOM from 'react-dom'
import {Draggable} from 'react-beautiful-dnd'

function WorkoutMove({item, indexItem}) {

    return (
      <Draggable draggableId={`${item.id}`} index={indexItem}>
      {(provided, snapshot) => {
        const isDrag = snapshot.isDragging

        const xxx = (
          <a href="/" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <img className="workout_thumb" src="./images/1.jpg" alt="" />
          </a>
        )

        return !isDrag ? xxx : ReactDOM.createPortal(xxx, document.getElementById('portal'))
      }}
      </Draggable>
    )
}

export default WorkoutMove
