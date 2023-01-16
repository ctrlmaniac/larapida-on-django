import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listFail, listSuccess } from "./slice";

export default function list(q: {} = {}): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.PRODOTTI}?`;
    let newQuery: string[] = [];

    for (const [key, value] of Object.entries(q)) {
      newQuery.push(`${key}=${value}`);
    }

    const queryAsString = newQuery.join("&");

    api
      .get(`${endpoint}${queryAsString}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listFail());
      });
  };
}

