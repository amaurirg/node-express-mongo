import mongoose from "mongoose";


mongoose.connect("mongodb+srv://amaurigiovani:l0p3lUgulKvUJRTT@aluranode.3hk5a.mongodb.net/?retryWrites=true&w=majority&appName=AluraNode")

let db = mongoose.connection;

export default db;
