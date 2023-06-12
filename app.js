const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/views/date.js");


//const list = require('./views/list.ejs')
const app = express();


var items = [];
let workItems = [];
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("views/public"));  

app.get("/", function (req, res) {

  let day = date();
 
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;

    if(req.body.list === "work"){
    workItems.push(item); 
    res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "work List", newListItems: workItems});
});

app.get("/about", function(req ,res){
    res.render("about");
});
app.post("/work", function(req, res){
    let item = body.item.newItem;
    workItems.push(item);
    res.redirect("/work")
});

app.listen(3003, function () {
    console.log("sever running on port 3003");
});
