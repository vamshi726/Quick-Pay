const express = require("express");
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mainRouter = require("./routes/index")

const PORT = 3000

app.use(cors()) //CORS is a security feature implemented by web browsers to restrict cross-origin HTTP requests initiated from scripts running in the browser

app.use(bodyParser.json()) //middleware will parse the JSON data and make it available in the req.body

app.use("/api/v1", mainRouter) 




app.listen(PORT, () => {
    console.log("server listenig on port:" + PORT);
})

// api/v1/user/signup
// api/v1/user/signin

// api/v1/account/changePassword
// api/v1/account/transferMoney

