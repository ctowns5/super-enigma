// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3001;
// const apiRoutes = require('./lib/api-routes');
// const htmlRoutes = require('./lib/html-routes');
const express = require('express');
const html_routes = require('./lib/html-routes')
const api_routes = require('./lib/api-routes')
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});