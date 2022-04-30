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
        console.log("Please extends the class \"Scenario\"!")
        return {}
    }
}