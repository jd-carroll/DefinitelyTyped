// Type definitions for countdown.js
// Project: http://countdownjs.org/
// Definitions by: Gabriel Juchault https://github.com/gjuchault
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="countdown.d.ts" />

import { countdown, Timespan, CountdownStatic, Format } from 'countdown';

let ts: Timespan;
let interval: number;

ts = <Timespan>countdown(new Date());
ts = <Timespan>countdown(150);

interval = <number>countdown(new Date(),
    function (ts: Timespan) {
        document.getElementById('pageTimer').innerHTML = ts.toHTML('strong');
    },
    countdown.HOURS | countdown.MINUTES | countdown.SECONDS,
    2,
    2
);

clearInterval(interval);

ts.toString('foo');
ts.toHTML('em', 'foo');

countdown.resetFormat();
countdown.setLabels('a', 'b', 'c', 'd', 'e');

countdown.setLabels('a', 'b', 'c', 'd', 'e', function (value: number): string {
    return 'ok';
}, function (value: number, unit: number): string {
    return 'ok';
});

countdown.setLabels(null, null, null, null, 'Now.');

countdown.setLabels(
    ' millisecond| second| minute| hour| day| week| month| year| decade| century| millennium',
    ' milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia',
    ' and ',
    ', ',
    '',
    n => n.toString());
