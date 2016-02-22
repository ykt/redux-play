import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions'
import {ItemList} from '../components/Item'


const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.get("child").get("items")
  }
};

const ShowItem = connect(
  mapStateToProps
)(ItemList);


export default ShowItem