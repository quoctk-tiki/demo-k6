export default {
    discardResponseBodies: false,
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<700', 'p(95)<900', 'p(99)<1200', 'max<1500'],
        'rate_status_ok': ['rate>=0.99'],
    },
    scenarios: {
        get_warehouse: {
            executor: 'per-vu-iterations',
            gracefulStop: '10s',
            exec: 'GetWarehouse',
            env: {
                APOLLO_API: 'http://127.0.0.1:3000/api/v1/warehouses/1',
            },
            tags: {},
            vus: 100,
            iterations: 10,
            maxDuration: '10s',
            startTime: '0s',
        },
        list_warehouse: {
            executor: 'per-vu-iterations',
            gracefulStop: '10s',
            exec: 'ListWarehouse',
            env: {
                APOLLO_API: 'http://127.0.0.1:3000/api/v1/warehouses?next=0&limit=100',
            },
            tags: {},
            vus: 100,
            iterations: 10,
            maxDuration: '10s',
            startTime: '0s',
        },
        create_warehouse: {
            executor: 'per-vu-iterations',
            gracefulStop: '10s',
            exec: 'CreateWarehouse',
            env: {
                APOLLO_API: 'http://127.0.0.1:3000/api/v1/warehouses',
                WAREHOUSE_PAYLOAD: `{
                    "code": "hn",
                    "name": "WH-HN",
                    "is_active": true,
                    "is_bulky_allow": true,
                    "is_bulky_allow_bop": true,
                    "erp_id": 11
                }`,
            },
            tags: {},
            vus: 2,
            iterations: 10,
            maxDuration: '10s',
            startTime: '0s',
        },
    },
};