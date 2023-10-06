const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOSTNAME;

require("./configs/viewEngine.config")(app);
require("./routers/user.router")(app);

app.listen(port, hostname, () => {
    console.log(`
    ==============================================
    🚀 Server running at http://${hostname}:${port} 🚀
    ==============================================
    `);
});