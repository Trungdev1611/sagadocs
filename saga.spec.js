import test from 'tape'

import { incrementAsync, delay } from './saga'
import { put, call } from 'redux-saga/effects'

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()

    // iterate over the returned Generator and check the values yielded by the generator.
    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'

    )

    assert.deepEqual(
        gen.next.value,
        put({ type: 'INCREMENT' }),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )
    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync Saga must be done'
    )
    assert.end()

})
