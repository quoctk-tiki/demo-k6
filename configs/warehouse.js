import {Rate} from 'k6/metrics';
import {Scenario} from "../scenario/scenario.js";

const WarehouseAPI = {
    Host: "http://127.0.0.1:3000",
    GetWarehouse: "/api/v1/warehouses/1",
    ListWarehouse: "/api/v1/warehouses?next=0&limit=100",
    CreateWarehouse: "/api/v1/warehouses",
    UpdateWarehouse: "/api/v1/warehouses/1",
}

const WarehouseCustomThreshold = {
    RateStatusOk: new Rate('rate_status_ok'),
}

const WarehouseOption = {
    DiscardResponseBodies: false,
    HttpDebug: null, // 'full', 'false' or null
    Thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90)<=30', 'p(95)<=60', 'p(99)<=150', 'max<=300'],
        "rate_status_ok": ['rate>=0.99'],
    },
    SummaryTimeUnit: 'ms',
    SummaryTrendStats: ['avg', 'min', 'med', 'max', 'p(90)', 'p(95)', 'p(99)', 'p(99.99)', 'count'],
}

const WarehouseScenario = [
    new Scenario("GetWarehouse", {
        API: `${WarehouseAPI.Host}${WarehouseAPI.GetWarehouse}`,
    }),
    new Scenario("ListWarehouse", {
        API: `${WarehouseAPI.Host}${WarehouseAPI.ListWarehouse}`,
    }),
    new Scenario("CreateWarehouse", {
        API: `${WarehouseAPI.Host}${WarehouseAPI.CreateWarehouse}`,
        PAYLOAD: `{
            "code": "hn",
            "name": "WH-HN",
            "is_bulky_allow": true,
            "is_bulky_allow_bop": true,
            "erp_id": 10
        }`,
    }),
    new Scenario("UpdateWarehouse", {
        API: `${WarehouseAPI.Host}${WarehouseAPI.UpdateWarehouse}`,
        PAYLOAD: `{
            "code": "HCM - Updated",
            "name": "WH-HCM-Updated",
            "is_bulky_allow": false,
            "is_bulky_allow_bop": false,
            "erp_id": 20
        }`,
    }),
];

export const WarehouseConfig = {
    API: WarehouseAPI,
    Option: WarehouseOption,
    Scenario: WarehouseScenario,
    CustomThreshold: WarehouseCustomThreshold,
}
