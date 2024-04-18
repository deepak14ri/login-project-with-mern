require("dotenv").config();
const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter");
const dbConnect = require("./lib/dbConnect");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URI || 5173, credentials: true }));

//routes
app.use("/user", UserAuthRouter);

dbConnect();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`The server is running in port ${PORT}`);
});
