import bodyParser from "body-parser";
import express from "express";
import assignmentRouter from "./apps/assignments.js";

import logging from "./logging.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
//1.Create Logging & validation
app.use([logging]);
//2.Router
app.use("/assignments", assignmentRouter);

app.get("/", (req, res) => {
     return res.status(200).json({
      message: `Root Page, Welcome to meet you`,
    });
  })

  


app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
