import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
  res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
};

export default generateToken;
