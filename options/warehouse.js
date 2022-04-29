export default {
    discardResponseBodies: false,
    scenarios: {
        get_warehouse: {
            executor: 'per-vu-iterations',
            gracefulStop: '10s',
            exec: 'GetWarehouse',
            env: {
                APOLLO_API: 'http://127.0.0.1:3000/api/v1/warehouses/1',
            },
            tags: {
                scenario_name_tag: 'get_warehouse',
            },
            vus: 2,
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
            tags: {
                scenario_name_tag: 'list_warehouse',
            },
            vus: 2,
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
            tags: {
                scenario_name_tag: 'create_warehouse',
            },
            vus: 2,
            iterations: 10,
            maxDuration: '10s',
            startTime: '0s',
        },
    },
};