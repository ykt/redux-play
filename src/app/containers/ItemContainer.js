import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions'
import {ItemList} from '../components/Item'

let BoxItem = ({ dispatch }) => {
  let input;
  return (
    <div>
      <button onClick={() => {
        dispatch(addItem(input.value));
        input.value = ''
      }}>
        Add Todo
      </button>

      <input ref={node => {
        input = node
      }}
      />
      <Line
        from={{x: 10, y: 20}}
        to={{x: 10, y: 100}}
        style="5px solid orange"
      />
    </div>
  )
};
const AddTodo = connect()(BoxItem)

export default AddTodo