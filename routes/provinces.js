module.exports = (app) => {
  const provinces = require("../controller/province");
  const authenticateJWT = require("../middleware/middleware");
  const router = require("express").Router();

  // Create a new province
  router.post("/", authenticateJWT, provinces.create);

  // Retrieve all province
  router.get("/", provinces.findAll);

  // Retrieve a single province with id
  router.get("/:id", provinces.findOne);

  // Update a province with id
  router.put("/:id", authenticateJWT, provinces.update);

  // Delete a province with id
  router.delete("/:id", authenticateJWT, provinces.delete);

  app.use("/api/provinces", router);
};
