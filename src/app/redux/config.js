import {Map, List} from 'immutable'

export const ACTION_TYPE = {
  ADD_ITEM: 'ADD_ITEM'
};
export const INIT_STATE = Map({
  current: Map({
    x: 0,
    y: 0
  }),
  child: Map({
    position: List(),
    items: List()
  })
});