import {Scenario} from "./scenario.js";

export class PerVuIterationScenario extends Scenario {
    constructor(exec, env) {
        super(exec, env)
    }

    GetScenarioConfig() {
        return {
            executor: 'per-vu-iterations',
            gracefulStop: '20s',
            exec: this.exec,
            env: this.env,
            tags: {},
            vus: 5,
            iterations: 500,
            maxDuration: '15s',
        }
    }
}