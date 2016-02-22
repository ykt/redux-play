import {add} from './actions/core'
import {ACTION_TYPE, INIT_STATE} from './redux/config'


export const reducer  = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_ITEM:
      return add(state, action.id, action.text);
  }

  return state;
};