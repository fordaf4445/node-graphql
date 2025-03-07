const mssql = require('../config/mssql');

const resolvers = {
    message: () => {
        return "Hello, graphQL! with express";
    },

    data: async ({limit, page}) => {
        try {
            const offset = (page - 1) * limit;
            const [result] = await mssql.query(
                `
                SELECT  id,
                        device_name,
                        unit,
                        unixtime,
                        time,
                        value
                FROM ${process.env.IDC_BTT_TABLE}
                ORDER BY id
                OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY;
                `
            );
            return result; 
        } catch (err) {
            console.log("❌ Error fetching IDC_BTT:", err);
            return "error not found data"
        }
    },
};

module.exports = resolvers;