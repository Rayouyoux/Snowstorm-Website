const { MongoClient, ServerApiVersion } = require("mongodb");
const { login } = require("./login");

const connectionString =`mongodb+srv://${login}@cluster0.4atmotk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

var dbConnection;

module.exports = {
    connectToServer: async (callback) => {
        try {
            var db = await client.connect();

            dbConnection = db.db("dev");

            console.log("Successfully connected to MongoDB.");
            return dbConnection
        } catch (e) {
            console.error(e);
            return e;
        }
    },

    getDb: function () {
        return dbConnection;
    }
}