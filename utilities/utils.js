import http from 'k6/http';

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
