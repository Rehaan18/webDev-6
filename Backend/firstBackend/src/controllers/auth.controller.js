import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      return res.status(400).json({
        message: "All Fields Required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "Email Already Registered",
      });
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    return res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error("RegisterUser Error:", error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const LoginUser = (req, res) => {
  return res.json({
    message: "Login Successful from Controller",
  });
};

export const LogoutUser = (req, res) => {
  return res.json({
    message: "Logout Successful from Controller",
  });
};
