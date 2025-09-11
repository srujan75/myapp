// backend/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
