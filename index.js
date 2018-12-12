const app = require("./server/app");

// Start the server
const port = process.env.PORT || 5555;
app.listen(port);
console.log(`Server listening at ${port}`);

// refactored code for easier test and feature scale
