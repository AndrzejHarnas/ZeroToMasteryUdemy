import {CHANGE_SEARCH_FIELD} from './constants.js';

const initialState = {
  serchField:''
}

export const searchRobots = (state=initialState, action={}) => {

  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
    return Object.assign({}, state, {searchfield: action.playload} );
    default:
    return state;
  }

}
