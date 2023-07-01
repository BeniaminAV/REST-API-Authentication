import express from "express"
import http from "http"
import cors from "cors"
import compression from "compression"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import router from "./router"

const app = express()

app.use(express.json())

app.use(cors({ credentials: true }))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello Server")
})

const server = http.createServer(app)

server.listen(5000, () =>
  console.log("Server is running on port http://localhost:5000")
)

const MONGO_URL =
  "MONGO URL"

mongoose.Promise = Promise
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error) => console.log(error))

app.use("/", router())
