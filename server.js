const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 4000;

const cors = require('cors');
app.use(cors({
    origin: [
        "http://localhost:3000",
        
    ],
    credentials: true
}));

//cookie-parser
app.use(cookieParser());

app.use(express.json());
const connectDatabase = require("./config/database")
connectDatabase();

//  import routes and mount
const user = require("./routes/user");
app.use("/api/v1", user);
app.listen(port, () => {
    console.log("app is running at port 4000")
})