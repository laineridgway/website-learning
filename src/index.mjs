import express from "express";
import usersRouter from './routes/users.mjs'

const app = express();

app.use(express.json());
app.use(usersRouter);

const loggingMiddleware = (request, response, next) => {
  console.log(`${request.method} - ${request.url}`);
  next(); // to go to next middleware/route/endpoint
};

app.use(loggingMiddleware); // logs requests to endpoints (global)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

// GET
app.get("/", loggingMiddleware, (request, response) => {
  // logs requests to endpoints (local)
  response.status(201).send({ msg: "Hello" }); // request: headers, response: what we send
});


app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "chicken breast", price: 12.99 }]);
});
