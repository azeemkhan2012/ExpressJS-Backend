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

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const { first_name, last_name } = req.body;
  if (first_name) {
    try {
      const [result] = await pool.query(
        `UPDATE testData
     SET first_name = ?, last_name = ?
     WHERE id = ?`,
        [first_name, last_name, id]
      );
      if (result.affectedRows > 0) {
        res.status(200).send("User Added Successfully");
      } else {
        res.status(404).send("User Not found");
      }
    } catch (err) {
      console.log("Error occured while adding user", err);
      res.status(500).send("Error occured");
    }
  } else {
    res.status(400).send("Feilds are missing");
  }
};

const editUser = async (req, res) => {
  const id = +req.params.id;

  const { first_name, last_name, email, age } = req.body;

  if (first_name && last_name && email && age) {
    try {
      const [result] = await pool.query(
        `UPDATE testData SET first_name = ?, last_name = ?, email = ?, age = ?
        WHERE id = ?
        `,
        [first_name, last_name, email, age, id]
      );
      if (result.affectedRows > 0) {
        res.status(200).send("User updated successfully");
      } else {
        res.status(404).send("User not found");
      }
    } catch (err) {
      console.log("Error occured while updating user", err);
      res.status(500).send("Internal issue occured");
    }
  }
};

module.exports = { getAllUsers, getOneUser, addUser, editUser, updateUser };
