const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const {router}=require("./routes/register")



const app = express();
app.use(express.json());
app.use(cors());


app.use("/signUp",router)



let connection = mongoose
  .connect(process.env.mongoURL)
  .then(() => console.log("Mongodb Connected Successfully!!"))
  .catch((error) =>
    console.error("Failed to connect to MongoDB:", error.message)
  );




app.listen(process.env.PORT, async () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
