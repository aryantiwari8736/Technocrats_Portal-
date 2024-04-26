const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/db.js");
const userRoutes=require("./routes/userRoutes.js");
const cors=require("cors");

dotenv.config();
connectDb();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());

app.listen(PORT, console.log(`Server is listening at Port:-${PORT}`));
