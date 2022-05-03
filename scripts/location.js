import {check} from 'k6';
import {DoHttpRequest, MethodType} from "../utils/utils.js";
import {LocationConfig} from "../configs/location.js";

export {default as options} from "../options/location.js";

export function GetLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'GetLocation has response status 200': (r) => r.status === 200,
        'GetLocation has body': (r) => r.body && r.body.length > 0,
    });
}

export function ListLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'ListLocation has response status 200': (r) => r.status === 200,
        'ListLocation has body': (r) => r.body && r.body.length > 0,
    });
}

export function CreateLocation() {
    let resp = DoHttpRequest(MethodType.POST, __ENV.API, __ENV.PAYLOAD)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'CreateLocation has response status 200': (r) => r.status === 200,
    });
}

export function UpdateLocation() {
    let resp = DoHttpRequest(MethodType.PATCH, __ENV.API, __ENV.PAYLOAD)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'UpdateLocation has response status 200': (r) => r.status === 200,
    });
}
