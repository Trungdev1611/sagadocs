import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))
export function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//     yield call(delay, 1000) //delay is namefunction, 1000 is parameter in function   // => { CALL: {fn: delay, args: [1000]}}  //call giong nhu goi 1 function
//     yield put({ type: 'INCREMENT' })   // => { PUT: {type: 'INCREMENT'} }   put giong nhu dispatch action
// }

function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
//start multisaga in once time

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}