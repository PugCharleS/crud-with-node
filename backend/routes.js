const express = require("express");
const { Router } = express;
const { con } = require("./config/db.config.js");

const router = Router();

class Users {
  constructor() {
    router.get("/", this.getUsers);
    router.get("/:id", this.getUserById);
    router.get("/city/:city", this.getUsersByCity);
    router.post("/", this.postUser);
    router.patch("/:id", this.updateUser);
    router.delete("/:id", this.deleteUser);
  }

  // GET_ALL_USER
  getUsers = (req, res) => {
    con.connect(() => {
      console.log("Connected!");
    });

    let sql = "SELECT * FROM users";
    con.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  };

  // GET_USER_BY_ID
  getUserById = (req, res) => {
    const { id } = req.params;
    let sql = "SELECT * FROM users WHERE id = ?";
    con.query(sql, [id], (err, results) => {
      if (err) throw err;
      results[0]
        ? res.send(results)
        : res.send({ error: "no existe un usuario con este id" });
    });
  };

  // GET_USERS_BY_CITY
  getUsersByCity = (req, res) => {
    const { city } = req.params;
    let sql = "SELECT * FROM users WHERE city = ?";
    con.query(sql, [city], (err, results) => {
      if (err) throw err;
      results[0]
        ? res.send(results)
        : res.send({ error: "no hay usuarios con esta ciudad" });
    });
  };

  // POST_USER
  postUser = (req, res) => {
    const user = req.body;
    const { lastName, firstName, email, address, city } = req.body;
    let sql = "SELECT * FROM users";
    con.query(sql, (err, results) => {
      if (err) throw err;
      const found = results.find((result) => result.email === email);
      if (found) {
        res.send("este email ya está registrado por un usuario");
        return;
      } else {
        con.query(
          "INSERT INTO users (lastName, firstName, email, address, city) VALUES (?,?,?,?,?)",
          [lastName, firstName, email, address, city],
          (err) => {
            if (err) throw err;
            res.send({ "usuario agregado": user });
          }
        );
      }
    });
  };

  // PATCH_USER
  updateUser = (req, res) => {
    const { id } = req.params;
    const { lastName, firstName, email, address, city } = req.body;
    con.query(
      "UPDATE users SET lastName=?, firstName=?, email=?, address=?, city=? WHERE id = ?",
      [lastName, firstName, email, address, city, id],
      (err, results) => {
        if (err) throw err;
        res.send({ "usuario actualizado": results });
      }
    );
  };

  // DELETE_USER
  deleteUser = (req, res) => {
    const { id } = req.params;
    let sql = "DELETE FROM users WHERE id = ?";
    con.query(sql, [id], (err, results) => {
      if (err) throw err;
      res.send({ "usuario eliminado": results });
    });
  };
}

new Users();

module.exports = {
  router,
};
