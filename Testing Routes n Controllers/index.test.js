import index from "./index.js";
import express from "express";
import supertest from "supertest";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

const request = supertest(app); // supertest

test("index route works", (done) => {
  request
    .get("/")
    .expect("Content-Type", /json/)
    .expect({ name: "frodo" })
    .expect(200, done);
});

test("testing route works", (done) => {
  request
    .post("/test")
    .type("form")
    .send({ item: "hey" })
    .then(() => {
      request.get("/test").expect({ array: ["hey"] }, done);
    });
});
