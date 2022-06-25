import { PRODOTTI_GET_SUCCESS, PRODOTTI_GET_FAIL } from "constants";

const initialState = {
  getting: true,
  getError: false,
  dettagli: {},
};

// Reducer
export default function dettagli(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case PRODOTTI_GET_SUCCESS: {
      return {
        ...state,
        dettagli: payload,
        getError: false,
        getting: false,
      };
    }

    case PRODOTTI_GET_FAIL: {
      return {
        ...state,
        dettagli: {},
        getError: payload,
        getting: false,
      };
    }

    default: {
      return state;
    }
  }
}
