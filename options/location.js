import {ApolloHost, GetDefaultOption, LocationAPI} from "./constants.js";

export default {
    discardResponseBodies: false,
    httpDebug: null, // 'full', 'false' or null
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<20', 'p(95)<30', 'p(99)<120', 'max<300'],
        'rate_status_ok': ['rate>=0.99'],
    },
    scenarios: {
        get_location: GetDefaultOption(
            'GetLocation', {
                API: `${ApolloHost}${LocationAPI.GetLocation}`,
            },
        ),
        list_location: GetDefaultOption(
            'ListLocation', {
                API: `${ApolloHost}${LocationAPI.ListLocation}`,
            },
        ),
        create_location: GetDefaultOption(
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
        update_location: GetDefaultOption(
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