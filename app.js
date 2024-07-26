const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./controllers/errorController.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const productRouter = require("./routes/productRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const orderRouter = require("./routes/orderRoutes.js");
const paymentRouter = require("./routes/paymentRoutes.js");

app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", orderRouter);
app.use("/api", paymentRouter);

app.use(errorHandler);

module.exports = app;
