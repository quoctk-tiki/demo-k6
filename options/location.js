export default {
    discardResponseBodies: false,
    httpDebug: null, // 'full', 'false' or null
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<12', 'p(95)<20', 'p(99)<40', 'max<500'],
        'rate_status_ok': ['rate>=0.99'],
    },
    scenarios: {
        get_location: {
            executor: 'ramping-arrival-rate',
            gracefulStop: '10s',
            exec: 'GetLocation',
            env: {
                APOLLO_API: 'http://127.0.0.1:3000/api/v1/locations/1',
            },
            tags: {},
            preAllocatedVUs: 2,
            maxVUs: 10,
            startRate: 2,
            timeUnit: '1s',
            stages: [
                {target: 5, duration: '2s'},   // linearly ramp-up to starting 5 iterations per "timeUnit" over 2s
                {target: 10, duration: '4s'}, // linearly ramp-up to starting 10 iterations per "timeUnit" over 4s
                {target: 10, duration: '4s'}, // continue starting 10 iterations per "timeUnit" over 4s
                {target: 4, duration: '5s'},   // linearly ramp-down to starting 4 iterations per "timeUnit" over 5s
            ],
        },
    },
};