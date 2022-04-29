import {DoHttpRequest, MethodType} from "../utilities/utils.js";
import {check} from 'k6';
import {Rate} from 'k6/metrics';

export {default as options} from "../options/location.js";

export const RateStatusOk = new Rate('rate_status_ok');

export function GetLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.APOLLO_API, null, null)
    RateStatusOk.add(resp.status === 200)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}