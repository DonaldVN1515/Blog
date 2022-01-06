const path = require("path");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const route = require("./routes");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Middle Ware
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.json());

// XML HTTP Request, axios, fetch

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine(
	"hbs",
	handlebars({
		extname: ".hbs",
	})
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

// Route
route(app);

// Port
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
