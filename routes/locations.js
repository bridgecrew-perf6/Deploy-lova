module.exports = (app) => {
  const locations = require("../controller/location");
  const router = require("express").Router();

  // Create a new location
  router.post("/", locations.create);

  // Retrieve all location
  router.get("/", locations.findAll);

  // Retrieve a single location with id
  router.get("/:id", locations.findOne);

  // Update a location with id
  router.put("/:id", locations.update);

  // Delete a location with id
  router.delete("/:id", locations.delete);

  app.use("/api/locations", router);
};
