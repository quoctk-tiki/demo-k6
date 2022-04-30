import {ConvertScenarioArrayToJsonArray} from "../utils/utils.js";
import {WarehouseConfig} from "../configs/warehouse.js";

export default {
    discardResponseBodies: WarehouseConfig.Option.DiscardResponseBodies,
    httpDebug: WarehouseConfig.Option.HttpDebug,
    thresholds: WarehouseConfig.Option.Thresholds,
    summaryTimeUnit: WarehouseConfig.Option.SummaryTimeUnit,
    summaryTrendStats: WarehouseConfig.Option.SummaryTrendStats,
    scenarios: ConvertScenarioArrayToJsonArray(WarehouseConfig.Scenario),
};