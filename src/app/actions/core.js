import {nextLocation} from '../Common/Utils'

export const add = (state, id, text) => {
  return state.updateIn(['child', 'items'], child => child.push(
    {

      id: id,
      text: text,
      location:  {
        x: 0,
        y: 0
      }
    }
  ))
};