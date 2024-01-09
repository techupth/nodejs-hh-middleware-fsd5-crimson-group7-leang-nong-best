import fs from "fs/promises";

function logging(req, res, next) {
  const text = `\nIP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`;
  fs.appendFile("./data/logs.txt", text);
  console.log(text);
  next();
}

export default logging;
