const express = require('express');
const app = express();

const PORT = 3000;

require("./startups/middleware")(app);
require("./startups/routes")(app);

app.listen(PORT || 3001, () => {
    console.log(`listening on port ${PORT}`);
});
