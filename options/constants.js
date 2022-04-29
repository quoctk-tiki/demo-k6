export function GetDefaultOption(exec, env) {
    return {
        executor: 'ramping-arrival-rate',
        gracefulStop: '10s',
        exec: exec,
        env: env,
        tags: {},
        preAllocatedVUs: 2,
        maxVUs: 20,
        startRate: 5,
        timeUnit: '1s',
        stages: [
            {target: 15, duration: '2s'},   // linearly ramp-up to starting 15 iterations per "timeUnit" over 2s
            {target: 20, duration: '4s'},   // linearly ramp-up to starting 20 iterations per "timeUnit" over 4s
            {target: 20, duration: '4s'},   // continue starting 20 iterations per "timeUnit" over 4s
            {target: 10, duration: '5s'},   // linearly ramp-down to starting 10 iterations per "timeUnit" over 5s
        ],
    }
}

export const ApolloHost = "http://127.0.0.1:3000"

export const WarehouseAPI = {
    GetWarehouse: "/api/v1/warehouses/1",
    ListWarehouse: "/api/v1/warehouses?next=0&limit=100",
    CreateWarehouse: "/api/v1/warehouses",
    UpdateWarehouse: "/api/v1/warehouses/1",
}

export const LocationAPI = {
    GetLocation: "/api/v1/locations/1",
    ListLocation: "/api/v1/locations?next=0&limit=100",
    CreateLocation: "/api/v1/locations",
    UpdateLocation: "/api/v1/locations/1",
}

