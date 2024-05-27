import mongoose from "mongoose" ;
import colors from 'colors' ;
const connectionToDb = async() => {
    try{
   const connection =  await mongoose.connect("mongodb://localhost:27017/eshop")
   console.log(connection.connection.host)
   console.log(`Mongodb connected on ${connection.connection.host}`.black.bgWhite);
    }catch(error){
console.log(`${error.message}`.red.underline.bold)
    }
}

export default connectionToDb