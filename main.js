import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import Counter from './Counter'
import reducer from './reducers'

import { helloSaga } from './saga';
import createSagaMiddleware from '@redux-saga/core';

//initial saga middleware
const sagaMiddleware = createSagaMiddleware()

//initilazion store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))




const action = type => store.dispatch({ type })
//run saga (file hellosaga has just created)
sagaMiddleware.run(helloSaga)
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
