require("dotenv").config();
const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter.js");
const CategoryRouter = require("./routes/CategoryRouter.js");
const ProductRouter = require("./routes/ProductRouter.js");

const dbConnect = require("./lib/dbConnect.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4000; // Define the PORT variable once

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URI || 5173, credentials: true }));

// routes
app.use("/user", UserAuthRouter);
app.use("/user", CategoryRouter);
app.use("/user", ProductRouter);


dbConnect();

app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});
