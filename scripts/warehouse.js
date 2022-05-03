import {check} from 'k6';
import {DoHttpRequest, MethodType} from "../utils/utils.js";
import {WarehouseConfig} from "../configs/warehouse.js";

export {default as options} from "../options/warehouse.js";

export function GetWarehouse() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'GetWarehouse has response status 200': (r) => r.status === 200,
        'GetWarehouse has body': (r) => r.body && r.body.length > 0,
    });
}

export function ListWarehouse() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'ListWarehouse has response status 200': (r) => r.status === 200,
        'ListWarehouse has body': (r) => r.body && r.body.length > 0,
    });
}

export function CreateWarehouse() {
    let resp = DoHttpRequest(MethodType.POST, __ENV.API, __ENV.PAYLOAD)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'CreateWarehouse has response status 200': (r) => r.status === 200,
    });
}

export function UpdateWarehouse() {
    let resp = DoHttpRequest(MethodType.PATCH, __ENV.API, __ENV.PAYLOAD)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)
    check(resp, {
        'UpdateWarehouse has response status 200': (r) => r.status === 200,
    });
}
