export default {
    discardResponseBodies: false,
    scenarios: {
        get_location: {
            executor: 'per-vu-iterations',
            gracefulStop: '10s',
            exec: 'GetLocation',
            env: {
                APOLLO_API: 'http://127.0.0.1:3000/api/v1/locations/1',
            },
            tags: {
                scenario_name_tag: 'get_location',
            },
            vus: 1,
            iterations: 10,
            maxDuration: '10s',
        },
    },
};