import {Rate} from 'k6/metrics';
import {RampingArrivalRateScenario} from "../scenario/ramping_arrival_rate.js";
import {ServiceHost} from "./const.js";

const WarehouseAPI = {
    GetWarehouse: "/api/v1/warehouses/1",
    ListWarehouse: "/api/v1/warehouses?next=0&limit=10",
    CreateWarehouse: "/api/v1/warehouses",
    UpdateWarehouse: "/api/v1/warehouses/1",
}

const WarehouseCustomThreshold = {
    RateStatusOk: new Rate('rate_status_ok'),
}

const WarehouseOption = {
    DiscardResponseBodies: true,
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
    new RampingArrivalRateScenario("GetWarehouse", {
        API: `${ServiceHost}${WarehouseAPI.GetWarehouse}`,
    }),
    new RampingArrivalRateScenario("ListWarehouse", {
        API: `${ServiceHost}${WarehouseAPI.ListWarehouse}`,
    }),
    new RampingArrivalRateScenario("CreateWarehouse", {
        API: `${ServiceHost}${WarehouseAPI.CreateWarehouse}`,
        PAYLOAD: `{
            "code": "hn",
            "name": "WH-HN",
            "is_bulky_allow": true,
            "is_bulky_allow_bop": true,
            "erp_id": 10
        }`,
    }),
    new RampingArrivalRateScenario("UpdateWarehouse", {
        API: `${ServiceHost}${WarehouseAPI.UpdateWarehouse}`,
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
