//This is just how we include the library we want in CommonJs syntax
const request = require("superagent");

//We send a request to get googles home page
request.get("http://www.google.com/", (err, res) => {
  // We are now inside the callback! this only gets called once the request finishes
  if (err) {
    // In case something goes wrong, we handle it here
    console.error(err);
  }

  // Once we get the response, we print it to the console
  console.log(res.text);
});
