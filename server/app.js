const express = require("express");
const router = require("./router");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
router(app);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

// app.get("/", (req, res) => {
//   res.status(200).send({ name: "azeem", age: 20 });
// });

// const express = require("express");

// const app = express();
// const PORT = 8080;

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Hello Kurks world infinity");
// });

// app.get("/main", (req, res) => {
//   console.log(req.body);
//   res.status(200).send({ name: "azeem", age: "20" });
// });

// app.post("/newcontent", (req, res) => {
//   const { name } = req.body;
//   console.log(name);
//   if (req.body.age >= 18 && req.body.education == "Graduation") {
//     res.status(200).send(`Access allowed to Mr. ${name}`);
//   } else {
//     res.status(400).send(`${name} Access Denied you are under age `);
//   }
// });

// app.listen(PORT, (error) => {
//   if (!error)
//     console.log(
//       "Server is Successfully Running, and App is listening on port " + PORT
//     );
//   else console.log("Error occurred, server can't start", error);
// });
