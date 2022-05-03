import http from 'k6/http';

export function ConvertScenarioArrayToJsonArray(scenarioArr) {
    if (Array.isArray(scenarioArr) === false) {
        throw "The \"scenarioArr\" must be an Array type!"
    }

    let result = {};
    scenarioArr.forEach((data) => {
        let key = data.exec;
        result[key] = data.GetScenarioConfig();
    })

    return result
}

export const MethodType = {
    POST: Symbol("POST"),
    PUT: Symbol("PUT"),
    GET: Symbol("GET"),
    PATCH: Symbol("PATCH"),
    DELETE: Symbol("DELETE"),
}

export function DoHttpRequest(method, url, payload, headerParams) {
    let params = null
    if (headerParams != null) {
        params = {
            headers: headerParams
        }
    }

    // Return a http response.
    switch (method) {
        case MethodType.POST:
            return http.post(url, payload, params)
        case MethodType.PUT:
            return http.put(url, payload, params)
        case MethodType.GET:
            return http.get(url, params)
        case MethodType.PATCH:
            return http.patch(url, payload, params)
        case MethodType.DELETE:
            return http.del(url, payload, params)
        default:
            throw "Invalid http method";
    }
}

export function GetFunctionName() {
    // + Leverage the error feature to get the function name.
    // + From error " at functionName ( ...", we can extract the "functionName".
    let e = new Error('dummy');
    return e.stack
        .split('\n')[2]
        .replace(/^\s+at\s+(.+?)\s.+/g, '$1')
}

export function GetCheckResponse200(name, response) {
    if (name === null || name.length === 0) {
        throw "Please input a specific function name"
    }

    let key = `${name} has response status 200`;
    let status = response !== null && response.hasOwnProperty("status") && response.status === 200;

    let result = {};
    result[key] = status;
    return result
}

export function GetCheckResponseBodyLength(name, response) {
    if (name === null || name.length === 0) {
        throw "Please input a specific function name"
    }

    let key = `${name} has response body`;
    let status = response !== null && response.body && response.body.length > 0;

    let result = {};
    result[key] = status;
    return result
}

export function GetCheckDataID(name, response) {
    if (name === null || name.length === 0) {
        throw "Please input a specific function name"
    }

    let key = `${name} has ID > 0`;
    let status = false;
    if (response !== null && response.body !== null && response.body !== undefined) {
        let json = response.json();
        if (json !== null && json !== undefined) {
            if (json.hasOwnProperty("data")) {
                json = json["data"];
            }
            status = json.hasOwnProperty("id") && json["id"] > 0;
        }
    }

    let result = {};
    result[key] = status;
    return result
}
