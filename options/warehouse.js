import {ApolloHost, GetDefaultScenarioConfig, WarehouseAPI} from "./constants.js";

export default {
    discardResponseBodies: false,
    httpDebug: null, // 'full', 'false' or null
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<=30', 'p(95)<=60', 'p(99)<=150', 'max<=300'],
        'rate_status_ok': ['rate>=0.99'],
    },
    summaryTimeUnit: 'ms',
    summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(90)', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
    scenarios: {
        get_warehouse: GetDefaultScenarioConfig(
            'GetWarehouse', {
                API: `${ApolloHost}${WarehouseAPI.GetWarehouse}`,
            },
        ),
        list_warehouse: GetDefaultScenarioConfig(
            'ListWarehouse', {
                API: `${ApolloHost}${WarehouseAPI.ListWarehouse}`,
            },
        ),
        create_warehouse: GetDefaultScenarioConfig(
            'CreateWarehouse', {
                API: `${ApolloHost}${WarehouseAPI.CreateWarehouse}`,
                PAYLOAD: `{
                    "code": "hn",
                    "name": "WH-HN",
                    "is_bulky_allow": true,
                    "is_bulky_allow_bop": true,
                    "erp_id": 10
                }`,
            },
        ),
        update_warehouse: GetDefaultScenarioConfig(
            'UpdateWarehouse', {
                API: `${ApolloHost}${WarehouseAPI.UpdateWarehouse}`,
                PAYLOAD: `{
                    "code": "HCM - Updated",
                    "name": "WH-HCM-Updated",
                    "is_bulky_allow": false,
                    "is_bulky_allow_bop": false,
                    "erp_id": 20
                }`,
            },
        ),
    },
};