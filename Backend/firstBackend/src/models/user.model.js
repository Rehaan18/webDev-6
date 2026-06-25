import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        fullName:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        phone:{
            type:Number,
            required: true,
        },
        gender:{
            type:String,
            required: true,
        },
        photo:{
            url:{
                type: String,
            },
            publicId:
            {
                type: String,
            } ,
        },

        password:{
            type:String,
            required: true,
        },

        dob:{
            type:Date,
            required: true,
        },

    },
    {
        timestamps: true,
    },
);

const user = mongoose.model("User",UserSchema);

export default user ;