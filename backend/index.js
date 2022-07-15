const express = require("express");
require("dotenv").config({ path: "./config/vars/.env" });
const bodyParser = require("body-parser");
const { router } = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/api/users", router);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
