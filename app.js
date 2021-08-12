const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
//public static path
const staticpath = path.join("__dirname", "../public");


app.set('view engine', 'hbs');
app.use(express.static(staticpath));



//routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render('404error', {
        errormsg: 'opps! page not found',
    });
});
app.listen(port, () => {
    console.log(`listenig to the port is ${port}`)
})