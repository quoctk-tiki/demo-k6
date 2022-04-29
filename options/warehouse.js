import {ApolloHost, GetDefaultOption, WarehouseAPI} from "./constants.js";

export default {
    discardResponseBodies: false,
    httpDebug: null, // 'full', 'false' or null
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<20', 'p(95)<30', 'p(99)<120', 'max<300'],
        'rate_status_ok': ['rate>=0.99'],
    },
    scenarios: {
        get_warehouse: GetDefaultOption(
            'GetWarehouse', {
                API: `${ApolloHost}${WarehouseAPI.GetWarehouse}`,
            },
        ),
        list_warehouse: GetDefaultOption(
            'ListWarehouse', {
                API: `${ApolloHost}${WarehouseAPI.ListWarehouse}`,
            },
        ),
        create_warehouse: GetDefaultOption(
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
        update_warehouse: GetDefaultOption(
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