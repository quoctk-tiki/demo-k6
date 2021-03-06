import {Rate} from 'k6/metrics';
import {RampingArrivalRateScenario} from "../scenario/ramping_arrival_rate.js";
import {ServiceHost, ServiceDefaultHeaders} from "./const.js";

const LocationAPI = {
    GetLocation: "/api/v1/locations/1",
    ListLocation: "/api/v1/locations?next=0&limit=10",
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
        API: `${ServiceHost}${LocationAPI.GetLocation}`,
        HEADERS: JSON.stringify(ServiceDefaultHeaders),
    }),
    new RampingArrivalRateScenario("ListLocation", {
        API: `${ServiceHost}${LocationAPI.ListLocation}`,
        HEADERS: JSON.stringify(ServiceDefaultHeaders),
    }),
    new RampingArrivalRateScenario("CreateLocation", {
        API: `${ServiceHost}${LocationAPI.CreateLocation}`,
        HEADERS: JSON.stringify(ServiceDefaultHeaders),
        PAYLOAD: `{
            "type": "sale",
            "name": "hn-Kho Hàng Bán",
            "complete_name": "hn-Kho Hàng Bán",
            "usage": "internal",
            "contact_info": {
                "hello": "Here is load test!"
            },
            "warehouse_id": 1,
            "erp_id": 10
        }`,
    }),
    new RampingArrivalRateScenario("UpdateLocation", {
        API: `${ServiceHost}${LocationAPI.UpdateLocation}`,
        HEADERS: JSON.stringify(ServiceDefaultHeaders),
        PAYLOAD: `{
            "type": "sale - Updated",
            "name": "hn-Kho Hàng Bán - Updated",
            "complete_name": "hn-Kho Hàng Bán - Updated",
            "usage": "internal",
            "warehouse_id": 1,
            "erp_id": 20
        }`,
    }),
];

export const LocationConfig = {
    API: LocationAPI,
    Option: LocationOption,
    Scenario: LocationScenario,
    CustomThreshold: LocationCustomThreshold,
}
