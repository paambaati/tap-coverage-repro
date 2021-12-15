import tap from 'tap'
import { add, multiply } from '../src/math'

tap.test('adding numbers must work', (t) => {
    t.equal(add(1, 2), 3, 'adding should work correctly')
    t.end()
})

tap.test('multiplying numbers must work', (t) => {
    t.equal(multiply(2, 3), 6, 'multiplying should work correctly')
    t.end()
})
