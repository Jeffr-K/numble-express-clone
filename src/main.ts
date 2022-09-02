import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

const app = express();

mongoose.connect(process.env.MONGOOSE_CONFIG as string)
  .then(r => console.log(
    (r)
      ? "[Nosql] Connected Mongodb"
      : "[Nosql] Disconnected Mongodb")
  )
  .catch(err => console.error(err));

let db = mongoose.connection;
db.on("connection", () => {
  console.log("Connected");
});

db.on("error", () => {
  console.error("Connection error")
});

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.json({ message: "hello, world!"});
});

app.listen(process.env.port, () => { //
  console.log(`
    🚀 Numble Server ready at http://${process.env.host}:${process.env.port}
  `);
});
