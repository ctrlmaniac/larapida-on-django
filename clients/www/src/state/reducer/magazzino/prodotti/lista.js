import {
  PRODOTTI_LIST_SUCCESS,
  PRODOTTI_LIST_FAIL,
  PRODOTTI_LIST_START,
} from "constants";

const initialState = {
  getting: true,
  getError: false,
  list: [],
};

// Reducer
export default function lista(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case PRODOTTI_LIST_SUCCESS: {
      let new_state = { ...state, getError: false, getting: false };

      if (payload === undefined) {
        return initialState;
      } else {
        if (payload.hasOwnProperty("results")) {
          new_state = {
            ...new_state,
            list: payload.results,
          };
        } else {
          new_state = {
            ...new_state,
            list: payload,
          };
        }
      }

      return new_state;
    }

    case PRODOTTI_LIST_FAIL: {
      return {
        ...state,
        list: [],
        getError: payload,
        getting: false,
      };
    }

    case PRODOTTI_LIST_START: {
      return {
        ...state,
        getting: true,
        getError: false,
        list: [],
      };
    }

    default: {
      return state;
    }
  }
}
