import {
  ITEMS_FETCH_DATA_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  items: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
