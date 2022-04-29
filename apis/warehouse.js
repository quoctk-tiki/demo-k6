import {DoHttpRequest, MethodType} from "../utilities/utils.js";
import {check} from 'k6';

export {default as options} from "../options/warehouse.js";

export function GetWarehouse() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.APOLLO_API, null, null)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}

export function ListWarehouse() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.APOLLO_API, null, null)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}

export function CreateWarehouse() {
    let resp = DoHttpRequest(MethodType.POST, __ENV.APOLLO_API, __ENV.WAREHOUSE_PAYLOAD, null)
    check(resp, {
        'is status 200': (r) => r.status === 200,
    });
}
