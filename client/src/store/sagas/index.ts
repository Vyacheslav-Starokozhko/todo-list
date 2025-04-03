import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "../reducers/slices/exampleSlice";

function* fetchExampleDataSaga() {
    try {
        const response: string = yield call(() =>
            new Promise<string>((resolve) => setTimeout(() => resolve("Fetched Data"), 1000))
        );
        yield put(fetchDataSuccess(response));
    } catch (error) {
        yield put(fetchDataFailure());
    }
}

function* watchFetchExampleData() {
    yield takeLatest(fetchDataRequest.type, fetchExampleDataSaga);
}

export default function* rootSaga() {
    yield all([watchFetchExampleData()]);
}
