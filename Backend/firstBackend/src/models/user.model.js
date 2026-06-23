import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        FullName:{
            type:String,
            required: true,
        },
        Email:{
            type:String,
            required: true,
            unique: true,
        },
        PhoneNumber:{
            type:Number,
            required: true,
        },
        Gender:{
            type:String,
            required: true,
        },
        Photo:{
            url:{
                type: String,
            },
            publicId:
            {
                type: String,
            } ,
        },

        Password:{
            type:String,
            required: true,
        },

        Date:{
            type:Date,
            required: true,
        },

    },
    {
        timpestamps: true,
    },
);

const user = mongoose.model(UserSchema, "User");

export default user ;