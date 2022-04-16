const { Router } = require("express");
const router = Router();
const connection = require("../db/database.js");

router.get("/vehiculo", async (req, res) => {
  try {
      const [result] = await connection.query('SELECT * FROM vehiculo;');
      return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = router;
