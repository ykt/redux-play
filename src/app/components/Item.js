import React from 'react'
import style from '../../styles/item.css'
import Draggable from 'react-draggable'


export const Item = (props) => {
  return (
    <div >{props.title}</div>
  )
};

const DraggableItem = (props) => {
  return (
    <Draggable
      handle="strong"
      start={{x: 0, y: 0}}
      grid={[25, 25]}
      zIndex={100}
    >

      <div className={`${style.box}`}>
        <strong className={style.cursor}>Drag here</strong>
        <Item {...props}/>
      </div>
    </Draggable>
  )
};

export const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item) => {
        return <DraggableItem key={item.id} title={item.text} />
      })}
    </div>
  )
};


