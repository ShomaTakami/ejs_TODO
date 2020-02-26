const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

// var item = "";
const items = ["Add", "Whatever", "You want"];
const workItems = [];

//ejs使うにはこの文が必要！！
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list", { listTitle: day, newListItem: items });
});

app.post("/", function(req, res) {
  let item = req.body.newItem;
  if (req.body.list == "WorkList") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", { listTitle: "WorkList", newListItem: workItems });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Access to http://localhost:3000");
});
