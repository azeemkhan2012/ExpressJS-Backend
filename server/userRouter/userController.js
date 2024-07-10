const pool = require("../../data/database");
const data = require("../../data/mockData.json");

const getAllUsers = async (req, res) => {
  const [row] = await pool?.query("SELECT * FROM testData");
  res.status(200).send(row);
};

const getOneUser = async (req, res) => {
  const userId = req.query.id;
  console.log(userId);
  const [row] = await pool?.query("SELECT * FROM testData");
  const user = row.find((user) => user.id === +userId);

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ error: "User not found" });
  }
};

const addUser = async (req, res) => {
  const { first_name, last_name, email, age } = req.body;
  // const data = await pool.query("SELECT * FROM testData");
  // const id = data.length + 1;

  if (req.body.first_name) {
    await pool.query(
      `INSERT INTO testData (first_name, last_name, email, age) VALUES (?,?,?,?)`,
      [first_name, last_name, email, age]
    );
    res.status(200).send("Successfully added new user");
  } else {
    res.status(404).send("Body not found");
  }
};

const editUser = (req, res) => {
  const id = +req.params.id;

  const recordIdx = data.findIndex((user) => user.id === id);

  const updateRecord = { id, ...req.body };

  if (recordIdx >= 0) {
    data[recordIdx] = updateRecord;
  } else {
    res.status(405).send("record is not valid");
  }

  res.status(200).send({ message: "Here is update data", data });
};

const updateUser = (req, res) => {
  const id = +req.params.id;

  const userIdx = data.findIndex((user) => user.id === id);
  console.log(id);

  if (userIdx >= 0) {
    data[userIdx] = { ...data[userIdx], ...req.body };
  } else {
    res.status(400).send("Not Valid");
  }
  res
    .status(200)
    .send({ message: "User Update successfully", data: data[userIdx] });
};

module.exports = { getAllUsers, getOneUser, addUser, editUser, updateUser };
