import express from "express";
import routes from "./routes/index.mjs";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// GET
app.get("/", (request, response) => {
  response.cookie("hello", "world", { maxAge: 60000 * 60, signed: true });
  response.status(201).send({ msg: "Hello" }); // request: headers, response: what we send
});
