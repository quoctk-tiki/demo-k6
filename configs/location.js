import {Rate} from 'k6/metrics';
import {RampingArrivalRateScenario} from "../scenario/ramping_arrival_rate.js";

const LocationAPI = {
    Host: "http://127.0.0.1:3000",
    GetLocation: "/api/v1/locations/1",
    ListLocation: "/api/v1/locations?next=0&limit=100",
    CreateLocation: "/api/v1/locations",
    UpdateLocation: "/api/v1/locations/1",
}

const LocationCustomThreshold = {
    RateStatusOk: new Rate('rate_status_ok'),
}

const LocationOption = {
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

const LocationScenario = [
    new RampingArrivalRateScenario("GetLocation", {
        API: `${LocationAPI.Host}${LocationAPI.GetLocation}`,
    }),
    new RampingArrivalRateScenario("ListLocation", {
        API: `${LocationAPI.Host}${LocationAPI.ListLocation}`,
    }),
    new RampingArrivalRateScenario("CreateLocation", {
        API: `${LocationAPI.Host}${LocationAPI.CreateLocation}`,
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
    }),
    new RampingArrivalRateScenario("UpdateLocation", {
        API: `${LocationAPI.Host}${LocationAPI.UpdateLocation}`,
        PAYLOAD: `{
            "type": "sale - Updated",
            "name": "hn-Kho Hàng Bán - Updated",
            "complete_name": "hn-Kho Hàng Bán - Updated",
            "usage": "internal",
            "warehouse_id": 20,
            "erp_id": 50
        }`,
    }),
];

export const LocationConfig = {
    API: LocationAPI,
    Option: LocationOption,
    Scenario: LocationScenario,
    CustomThreshold: LocationCustomThreshold,
}
