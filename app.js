const express = require('express');
const app = express();
const PORT = 4000; // PORT for the Express server to run on
app.set('trust proxy', 1);

app.use('/', express.static('docs-dist'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
