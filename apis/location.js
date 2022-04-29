import {DoHttpRequest, MethodType} from "../utilities/utils.js";
import {check} from 'k6';

export {default as options} from "../options/location.js";

export function GetLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.APOLLO_API, null, null)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}