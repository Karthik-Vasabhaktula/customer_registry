const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Customer = require("../models/Customer");

exports.register = async (req, res) => {
  try {
    const { firstname, lastname, username, type, email, password } = req.body;
    let user = await Customer.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new Customer({ firstname, lastname, username, type, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Customer.findOne({ email });
    if (!user) return res.status(401).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, type: user.type },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "1h" }
    );

  res.json({
  token,
  user: {
    _id: user._id,
    firstname: user.firstname,
    email: user.email,
    type: user.type   // "user" | "admin" | "agent"
  }
});
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};
