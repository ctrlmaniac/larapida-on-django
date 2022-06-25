import actionCreator from "state/actions/creator";
import * as C from "constants";
import api from "state/api";

export const listStart = () => {
  return actionCreator(C.PRODOTTI_LIST_SUCCESS);
};

export const listSuccess = (data) => {
  return actionCreator(C.PRODOTTI_LIST_SUCCESS, data);
};

export const listFail = (data) => {
  return actionCreator(C.PRODOTTI_LIST_FAIL, data);
};

export const list = (query = {}) => {
  let endpoint = `${C.PRODOTTI_API_ENDPOINT}?`;
  let new_query = [];

  for (const [key, value] of Object.entries(query)) {
    new_query.push(`${key}=${value}`);
  }

  return (dispatch) => {
    new_query = new_query.join("&");
    dispatch(listStart());

    api
      .get(`${endpoint}${new_query}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listFail(error.message));
      });
  };
};
