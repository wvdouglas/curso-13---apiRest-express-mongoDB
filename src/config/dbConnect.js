import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default conectaNaDatabase;



// mongodb+srv://admin:<password>@cluster0.yzrza3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
