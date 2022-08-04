let { createClient } = require("redis");

const client = createClient({ socket: { host: "redis-server" } });

(async () => {
	try {
		client.on("error", (err) => console.log("Redis Client Error", err));
		await client.connect();
		console.log("\x1b[32m%s\x1b[0m", "Connected to Redis");
	} catch (err) {
		console.log("\x1b[31m%s\x1b[0m", "Failed to syncronize");
		console.log(err);
	}
})();
module.exports = { client };
