import {ConvertScenarioArrayToJsonArray} from "../utils/utils.js";
import {LocationConfig} from "../configs/location.js";

export default {
    discardResponseBodies: LocationConfig.Option.DiscardResponseBodies,
    httpDebug: LocationConfig.Option.HttpDebug,
    thresholds: LocationConfig.Option.Thresholds,
    summaryTimeUnit: LocationConfig.Option.SummaryTimeUnit,
    summaryTrendStats: LocationConfig.Option.SummaryTrendStats,
    scenarios: ConvertScenarioArrayToJsonArray(LocationConfig.Scenario),
};