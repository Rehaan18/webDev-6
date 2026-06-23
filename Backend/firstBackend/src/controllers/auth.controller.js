import user from "../models/user.model";

export const LoginUser = (req, res) => {
  try {
    const {fullName, email, password, phone, gender, dob} = req.body;

    if(!fullName || !email ||!password ||!phone || !gender ||!dob)
    {
        res.status(400).json({message: "all feilds required"});
        return;
    }

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        res.status(409).json({ message: "Email already registered"});
        return;

    }


  } catch (error) {
    
  }
};
export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};

export const RegisterUser = (req, res) => {
  res.json({ message: "Registration Successfull from Controller" });
};