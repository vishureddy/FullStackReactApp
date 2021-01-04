const express = require("express");
const app = express();
require("./services/passport");
require("./routes/authRoutes")(app);
require("https").globalAgent.options.rejectUnauthorized = false; // to work behind corporate proxy
const PORT = process.env.PORT || 5000;
app.listen(PORT);
