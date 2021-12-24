module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      province_name: String,
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

  const Province = mongoose.model("provinces", schema);
  return Province;
};
