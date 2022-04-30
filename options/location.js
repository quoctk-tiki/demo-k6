import {ApolloHost, GetDefaultScenarioConfig, LocationAPI} from "./constants.js";

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
        get_location: GetDefaultScenarioConfig(
            'GetLocation', {
                API: `${ApolloHost}${LocationAPI.GetLocation}`,
            },
        ),
        list_location: GetDefaultScenarioConfig(
            'ListLocation', {
                API: `${ApolloHost}${LocationAPI.ListLocation}`,
            },
        ),
        create_location: GetDefaultScenarioConfig(
            'CreateLocation', {
                API: `${ApolloHost}${LocationAPI.CreateLocation}`,
                PAYLOAD: `{
                    "type": "sale",
                    "name": "hn-Kho Hàng Bán",
                    "complete_name": "hn-Kho Hàng Bán",
                    "usage": "internal",
                    "contact_info": {
                        "hello": "Here is load test!"
                    },
                    "warehouse_id": 10,
                    "erp_id": 40
                }`,
            },
        ),
        update_location: GetDefaultScenarioConfig(
            'UpdateLocation', {
                API: `${ApolloHost}${LocationAPI.UpdateLocation}`,
                PAYLOAD: `{
                    "type": "sale - Updated",
                    "name": "hn-Kho Hàng Bán - Updated",
                    "complete_name": "hn-Kho Hàng Bán - Updated",
                    "usage": "internal",
                    "warehouse_id": 20,
                    "erp_id": 50
                }`,
            },
        ),
    },
};