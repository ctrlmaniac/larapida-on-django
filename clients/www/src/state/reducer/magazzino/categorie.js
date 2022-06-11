import { CATEGORIE_LIST_FAIL } from "constants";
import { CATEGORIE_LIST_SUCCESS } from "constants";

const initialState = {
  getting: true,
  getError: false,
  list: [],
};

export default function categorie(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case CATEGORIE_LIST_SUCCESS: {
      return {
        ...state,
        list: payload,
        getError: false,
        getting: false,
      };
    }

    case CATEGORIE_LIST_FAIL: {
      return {
        ...state,
        list: [],
        getError: payload,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
