module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      city: {
        type: mongoose.Types.ObjectId,
        ref: "cities",
      },
      title: String,
      date_start: Date,
      date_end: Date,
      time_start: String,
      time_end: String,
      registration: String,
      agerange: [String],
      description: String,
      link: String,
      address: String,
      map: String,
      is_free: Boolean,
      is_valid: Boolean,
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

  const Location = mongoose.model("location", schema);
  return Location;
};
