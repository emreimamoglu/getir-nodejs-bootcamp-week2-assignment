const fs = require("fs");
const path = require("path");
const logPath = path.join(__dirname, "log", "requestLogs.txt");


const logHandler = (req) => {
  /**
   * Destructure the data the request contains,
   * we will be putting them into the log file
   */
  const { rawHeaders, httpVersion, method, socket, url } = req;
  const { remoteAddress } = socket;

  /**
   * We define the log structure as an object
   */
  let content = JSON.stringify({
    timestamp: Date.now(),
    rawHeaders,
    httpVersion,
    method,
    remoteAddress,
    url,
  });

  content = content + '\n'; // Makes sure that next log written below the previous one


  /**
   * Write the data in the log content defined above to a file
   * after stringifying it.
   */
  fs.appendFile(logPath, content, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

module.exports = {
  logHandler,
};
