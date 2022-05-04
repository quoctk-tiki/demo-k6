import http from 'k6/http';
import {check} from 'k6';
import {Counter} from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
    stages: [
        {target: 20, duration: '4s'},
        {target: 15, duration: '4s'},
        {target: 5, duration: '2s'},
        {target: 0, duration: '2s'},
    ],
    thresholds: {
        requests: ['count < 200'],
    },
};

export default function () {
    const res = http.get('http://test.k6.io');
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response body': (r) => r.body.indexOf('Feel free to browse') !== -1,
    });
}
