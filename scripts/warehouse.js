import {check} from 'k6';
import {WarehouseConfig} from "../configs/warehouse.js";
import {
    DoHttpRequest,
    GetCheckDataID,
    GetCheckResponse200,
    GetCheckResponseBodyLength,
    GetFunctionName,
    MethodType
} from "../utils/utils.js";

export {default as options} from "../options/warehouse.js";

export function GetWarehouse() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API, __ENV.HEADERS, null)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (WarehouseConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
    }
    check(resp, checkData);
}

export function ListWarehouse() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API, __ENV.HEADERS, null)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (WarehouseConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
    }
    check(resp, checkData);
}

export function CreateWarehouse() {
    let resp = DoHttpRequest(MethodType.POST, __ENV.API, __ENV.HEADERS, __ENV.PAYLOAD)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (WarehouseConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
        Object.assign(checkData, GetCheckDataID(functionName, resp))
    }
    check(resp, checkData);
}

export function UpdateWarehouse() {
    let resp = DoHttpRequest(MethodType.PATCH, __ENV.API, __ENV.HEADERS, __ENV.PAYLOAD)
    WarehouseConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (WarehouseConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
        Object.assign(checkData, GetCheckDataID(functionName, resp))
    }
    check(resp, checkData);
}
