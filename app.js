import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import loggingMiddleware from "./logging.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(loggingMiddleware);
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
