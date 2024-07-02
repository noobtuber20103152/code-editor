const express = require("express");
const { exec } = require("child_process");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/execute", (req, res) => {
  const { code, input } = req.body;
  console.log(code, input)
  let codeFilename = `code-${uuidv4()}.py`;
  let inputFilename = `input-${uuidv4()}.txt`;
  codeFilename = codeFilename.toLowerCase();
  inputFilename = inputFilename.toLowerCase();
  const codeFilepath = path.join(__dirname, codeFilename);
  const inputFilepath = path.join(__dirname, inputFilename);
  fs.writeFileSync(codeFilepath, code);
  fs.writeFileSync(inputFilepath, input);
  exec(
    `docker run --rm -v ${__dirname}:/usr/src/app code-executor:base ${codeFilename} ${inputFilename}`,
    (error, stdout, stderr) => {
      fs.unlinkSync(codeFilepath);
      fs.unlinkSync(inputFilepath);
    //   console.log(error)
    console.log(error, stderr, stdout);
      if (error || stderr) {
        res.json({ error: stderr });
      } else {
        res.json({ result: stdout });
      }
    }
  );
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
