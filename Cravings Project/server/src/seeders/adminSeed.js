import User from "../models/user.model.js";
import bcrypt from "bcrypt";
const AdminUser = {
    fullName: "Admin",
    email: "Admin@cravings678.com",
    password:await bcrypt.hash("StrongPassword@123", 10),
    dob:"2006-11-18",
    gender:"other",
    userType: "admin",
    phone: "8890555706",
    photo:{url:"https://placehold.co/600x400?text=Admin", publicId:null},
};


const adminSeed  = async()=>{
    try {

        const existingAdmin = await User.findOne({email:AdminUser.email})
        if(existingAdmin){
           console.log("Existing user found");
           console.log("deleting Existing user found");
           await existingAdmin.deleteOne();
            
        }
       const newAdmin = await User.create(AdminUser);
       console.log("Admin created succcessfullly");
        
    } catch (error) {
        console.log("Admin not created ");
        throw error;
    }
}

export default adminSeed;