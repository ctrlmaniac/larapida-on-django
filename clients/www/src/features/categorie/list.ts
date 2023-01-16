import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listFail, listSuccess } from "./slice";

export default function list(q: {} = {}): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.CATEGORIE}?`;
    let query = [];

    for (const [key, value] of Object.entries(q)) {
      query.push(`${key}=${value}`);
    }

    const queryAsString = query.join("&");

    api
      .get(`${endpoint}${queryAsString}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        console.error(error.message);
        dispatch(listFail());
      });
  };
}
