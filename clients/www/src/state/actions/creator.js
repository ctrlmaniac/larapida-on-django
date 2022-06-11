export default function actionCreator(type, payload) {
  return {
    type: type,
    payload: payload,
  };
}
