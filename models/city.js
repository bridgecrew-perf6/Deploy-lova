module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      province: {
        type: mongoose.Types.ObjectId,
        ref: "provinces",
      },
      city_name: String,
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  const City = mongoose.model("cities", schema);
  return City;
};
