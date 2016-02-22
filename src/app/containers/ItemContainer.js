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
    </div>
  )
};
const AddTodo = connect()(BoxItem)

export default AddTodo