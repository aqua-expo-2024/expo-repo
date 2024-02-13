var express = require("express");
var app = express();
app.get("/", async function (req, res) {
  const res = await openai.createCompletion({
    prompt: event["data"],
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
  });

  // ruleid:eval-nodejs-for-OpenAI
  var resp = eval("(" + res + ")");
  // ruleid:eval-nodejs-for-OpenAI
  var z = new Function("arg1", "arg2", res);
  z(1, 2);
  // ruleid:eval-nodejs-for-OpenAI
  setTimeout("alert(" + res, 0);
  // ruleid:eval-nodejs-for-OpenAI
  setInterval(res, 0);
  res.send("Response</br>");
});
app.listen(8000);
// ok:eval-nodejs-for-OpenAI
eval("outside_express" + res.foo);
// ok:eval-nodejs-for-OpenAI
setTimeout("alert(" + res, 0);
// ok:eval-nodejs-for-OpenAI
setInterval(res, 0);
// ok:eval-nodejs-for-OpenAI
new Function("arg1", "arg2", res);

