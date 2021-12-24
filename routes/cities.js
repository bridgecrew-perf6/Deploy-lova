module.exports = (app) => {
  const cities = require("../controller/city");
  const authenticateJWT = require("../middleware/middleware");
  const router = require("express").Router();

  // Create a new city
  router.post("/", authenticateJWT, cities.create);

  // Retrieve all city
  router.get("/", cities.findAll);

  // Retrieve a single city with id
  router.get("/:id", cities.findOne);

  // Update a city with id
  router.put("/:id", authenticateJWT, cities.update);

  // Delete a city with id
  router.delete("/:id", authenticateJWT, cities.delete);

  app.use("/api/cities", router);
};
