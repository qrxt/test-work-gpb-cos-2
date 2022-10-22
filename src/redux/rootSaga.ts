import { all } from "redux-saga/effects";
import { getServicesSaga } from "./modules/services/sagas";
import { getServiceSaga } from "./modules/service/sagas";

function* rootSaga() {
  yield all([getServicesSaga, getServiceSaga]);
}

export default rootSaga;
