// Minimal Express static server
const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(compression());
app.use(express.static(__dirname, { etag: true, maxAge: '1h' }));

app.listen(PORT, () => {
  console.log(`Serving at http://127.0.0.1:${PORT}`);
});
