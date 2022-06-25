import actionCreator from "state/actions/creator";
import * as C from "constants";
import api from "state/api";
import { isEmpty } from "lodash";

export const getSuccess = (data) => {
  return actionCreator(C.PRODOTTI_GET_SUCCESS, data);
};

export const getFail = (data) => {
  return actionCreator(C.PRODOTTI_GET_FAIL, data);
};

export const get = (query) => {
  let url = `${C.PRODOTTI_API_ENDPOINT}?url=${query}`;
  return (dispatch) => {
    api
      .get(url)
      .then((response) => {
        if (isEmpty(response.data)) {
          let new_query = query.substring(1);
          api
            .get(`${C.PRODOTTI_API_ENDPOINT}?url=${new_query}`)
            .then((res) => {
              if (isEmpty(res.data)) {
                dispatch(getFail("Articolo non esistente"));
              } else {
                dispatch(getSuccess(res.data[0]));
              }
            })
            .catch((error) => {
              dispatch(getFail(error.message));
            });
        } else {
          dispatch(getSuccess(response.data));
        }
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
};
