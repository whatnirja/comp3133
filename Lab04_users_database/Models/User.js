const mongoose = require("mongoose");

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (e) {
    return false;
  }
}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      minlength: [4, "Username must be at least 4 characters"],
      maxlength: [100, "Username must be at most 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true, 
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Email must be a valid email address",
      ],
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
      match: [/^[A-Za-z ]+$/, "City can contain only alphabets and spaces"],
    },

    website: {
      type: String,
      required: [true, "Website is required"],
      trim: true,
      validate: {
        validator: isHttpUrl,
        message: "Website must be a valid URL starting with http or https",
      },
    },

    zip: {
      type: String,
      required: [true, "Zip code is required"],
      trim: true,
      match: [/^\d{5}-\d{4}$/, "Zip code must match 12345-1234 format"],
    },

    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
      match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must match 1-123-123-1234 format"],
    },
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("User", userSchema);
