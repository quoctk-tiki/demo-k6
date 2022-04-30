import {DoHttpRequest, MethodType} from "./utils.js";
import {check} from 'k6';
import {Rate} from 'k6/metrics';

export {default as options} from "../options/location.js";

export const RateStatusOk = new Rate('rate_status_ok');

export function GetLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    RateStatusOk.add(resp.status === 200)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}

export function ListLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    RateStatusOk.add(resp.status === 200)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}

export function CreateLocation() {
    let resp = DoHttpRequest(MethodType.POST, __ENV.API, __ENV.PAYLOAD)
    RateStatusOk.add(resp.status === 200)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}

export function UpdateLocation() {
    let resp = DoHttpRequest(MethodType.PATCH, __ENV.API, __ENV.PAYLOAD)
    RateStatusOk.add(resp.status === 200)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}
