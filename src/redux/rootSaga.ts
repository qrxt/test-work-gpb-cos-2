import { all } from "redux-saga/effects";
import { getServicesSaga } from "./modules/services/sagas";

function* rootSaga() {
  yield all([getServicesSaga]);
}

export default rootSaga;
