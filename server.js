// importing 
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const connect = require("./config/db");
const errorHandle = require("./middlewares/error");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

// dotenv
dotenv.config();

// mongoDb server
connect();

// developer tools
if (process.env.NODE_ENV === "developer") {
    app.use(morgan("dev"));
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1", require("./routes/stars.route"));
app.use("/api/v1", require("./routes/planets.route"));
app.use("/api/v1", require("./routes/swagger.route"));

// Error handling middleware
app.use(errorHandle);

// PORT and listening
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Dastur ${PORT} da ishlamoqda...`);
});