import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listStart, listSuccess, listFail } from "./slice";

export default function list(): AppThunk {
  return async (dispatch) => {
    dispatch(listStart());

    api
      .get(`${Endpoints.CATEGORIES}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
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

        dispatch(listFail(message));
      });
  };
}
