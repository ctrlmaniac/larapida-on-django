import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listSuccess, listFail } from "./slice";

export default function list(): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.NEGOZIOORARI}`;

    api
      .get(endpoint)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listFail());
      });
  };
}

