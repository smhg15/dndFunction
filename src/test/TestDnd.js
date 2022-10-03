import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../components/dndTable/ItemTypes';
///////////
//useDrag//
///////////
function Box() {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: ItemTypes.BOX,
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  //STYLES!!! BETWEEN HOOK AND RETURN
  const styleContainerDrag = {
    width: 100,
    height: 100,
    border: '2px solid white',
    margin: '25px',
    opacity: isDragging ? 0.5 : 1,

  }
const styleDrag = {    
    backgroundColor: '#0F0F0F',
    color: '#ffffff',
    cursor: 'move',
    width: '100%',
    height: '100%',
  }


  return (
    <div 
      ref={dragPreview} /* The dragPreview is optional. The dragPreview will be attached to the dragSource by default */
      style={styleContainerDrag}>
        <div 
          ref={drag} /* The drag ref marks this node as being the "pick-up" node */
          style={styleDrag}>DRAG
        </div>
    </div>
  )
}

///////////
//useDrop//
///////////
function Bucket() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: ItemTypes.BOX,
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))
  //STYLES!!! BETWEEN HOOK AND RETURN
  const styleContainerDrop = {
    width: 100,
    height: 100,
    border: '2px solid white',
    margin: '25px',
    opacity: isOver ? 0.5 : 1,

  }
  const styleDrop = {    
    color: '#ffffff',
    width: '100%',
    height: '100%',
    backgroundColor: isOver ? 'red' : 'black'
  }

  return (
    <div style={styleContainerDrop}>
      <div
        ref={drop}
        style={styleDrop}
      >
        {canDrop ? 'Release to drop' : 'Drag a box here'}
      </div>
    </div>
  )
}
export {Box, Bucket}