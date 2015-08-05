/**
 * Created by liudonghua on 7/31/15.
 */

var generate_detailed_json_result = function (data_row) {
    return {
        total_count: data_row[0],
        total_reported_count: data_row[1],
        total_unreported_count: data_row[2],
        reported_ratio: data_row[3]
    };
}

module.exports.generate_detailed_json_result = generate_detailed_json_result;