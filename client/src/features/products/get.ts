import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { getStart, getSuccess, getFail } from "./slice";

export default function get(url: string): AppThunk {
  return async (dispatch) => {
    dispatch(getStart());

    api
      .get(`${Endpoints.PRODUCTS}${url}`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        let message = "Errore";

        if (error.response) {
          message =
            error.response.data || "Errore di sistema, riprova più tardi!";
        } else {
          message = "Errore";
        }

        dispatch(getFail(message));
      });
  };
}
