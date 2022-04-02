import mongoose from "mongoose";

export async function connect(){
    await mongoose.connect("mongodb+srv://admin:sbdpu2001@cluster0.rnm0h.mongodb.net/todolistech?retryWrites=true&w=majority")
     console.log("DB Conected")
 }
 