import {Scenario} from "./scenario.js";

export class RampingArrivalRateScenario extends Scenario {
    constructor(exec, env) {
        super(exec, env);
    }

    GetScenarioConfig() {
        return {
            executor: 'ramping-arrival-rate',
            gracefulStop: '20s',
            exec: this.exec,
            env: this.env,
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
}