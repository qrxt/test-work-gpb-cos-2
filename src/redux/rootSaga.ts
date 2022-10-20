import { all } from "redux-saga/effects";
import { getServices } from "./modules/services/sagas";

function* rootSaga() {
  console.log("from root saga");

  yield all([getServices()]);
}

export default rootSaga;
