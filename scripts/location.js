import {check} from 'k6';
import {LocationConfig} from "../configs/location.js";
import {
    DoHttpRequest,
    GetCheckDataID,
    GetCheckResponse200,
    GetCheckResponseBodyLength,
    GetFunctionName,
    MethodType
} from "../utils/utils.js";

export {default as options} from "../options/location.js";

export function GetLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (LocationConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
    }
    check(resp, checkData);
}

export function ListLocation() {
    let resp = DoHttpRequest(MethodType.GET, __ENV.API)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (LocationConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
    }
    check(resp, checkData);
}

export function CreateLocation() {
    let resp = DoHttpRequest(MethodType.POST, __ENV.API, __ENV.PAYLOAD)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (LocationConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
        Object.assign(checkData, GetCheckDataID(functionName, resp))
    }
    check(resp, checkData);
}

export function UpdateLocation() {
    let resp = DoHttpRequest(MethodType.PATCH, __ENV.API, __ENV.PAYLOAD)
    LocationConfig.CustomThreshold.RateStatusOk.add(resp.status === 200)

    let functionName = GetFunctionName();
    let checkData = {};
    Object.assign(checkData, GetCheckResponse200(functionName, resp))
    if (LocationConfig.Option.DiscardResponseBodies === false) {
        Object.assign(checkData, GetCheckResponseBodyLength(functionName, resp))
        Object.assign(checkData, GetCheckDataID(functionName, resp))
    }
    check(resp, checkData);
}
