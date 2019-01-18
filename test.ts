import test from 'ava';
import { HttpCodes, HttpMessage, HttpStatus } from './';

test('CODES', (t) => {
    t.is(HttpCodes.OK, 200 as HttpCodes);
});

test('MESSAGES', (t) => {
    t.is(HttpMessage.IM_USED, 'IM Used');
});

test('STATUS', (t) => {
    t.is(HttpStatus[200], 'OK');
});