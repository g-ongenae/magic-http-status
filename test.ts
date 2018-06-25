import test from 'ava';
import { CODES, MESSAGES, STATUS } from './';

test('CODES', (t) => {
    t.is(CODES.OK, 200);
});

test('MESSAGES', (t) => {
    t.is(MESSAGES.IM_USED, 'IM Used');
});

test('STATUS', (t) => {
    t.is(STATUS[200], 'OK');
});