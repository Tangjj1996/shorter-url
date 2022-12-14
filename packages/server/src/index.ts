import express from "express";
import config from "config";
import bodyParse from "body-parser";
import routes from "./routes";
import db from "./db";
import cors from "cors";

const port = config.get<number>("port");

const app = express();

app.use(bodyParse.json());

app.use(cors());

app.listen(port, () => {
  db();
  routes(app);
});
