const express = require("express");
const path = require("path");

module.exports = (app) => {
    //viewEngine
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '../public')));

    // middle ware
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    // routing
    require("../routers/user.router")(app)
}