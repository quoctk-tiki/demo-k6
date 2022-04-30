export class Scenario {
    constructor(exec, env) {
        this.ValidateExecParam(exec);
        this.exec = exec;
        this.ValidateEnvParam(env);
        this.env = env;
    }

    ValidateExecParam(exec) {
        if (exec == null || exec.length === 0) {
            throw "The \"exec\" is your function name and it is required!"
        }
    }

    ValidateEnvParam(env) {
        if (env == null) {
            throw "The \"env\" is a required JSON parameter and it must have the \"API\" endpoint field!";
        }

        const envStr = JSON.stringify(env)
        try {
            JSON.parse(envStr);
        } catch (e) {
            throw "The \"env\" must be a JSON type!";
        }

        if (env.hasOwnProperty("API") === false || env.API.length === 0) {
            throw "The \"env\" must have the \"API\" endpoint field!";
        }
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