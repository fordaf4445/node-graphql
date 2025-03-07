const { buildSchema } = require('graphql');

const schema = buildSchema(
    `
    type Query {
        message: String
        data(limit: Int, page: Int) : [idc_btt]
    }

    type idc_btt {
        id: Int
        device_name: String
        unit: String
        unixtime: String
        time: String
        value: Float
    }
    `
);

module.exports = schema;
