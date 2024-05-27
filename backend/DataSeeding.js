import mongoose from "mongoose";
import ConnectionToDb from "./db.js";
import userData from "./data/user.js";
import products from "./data/product.js";
import colors from "colors";
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";



ConnectionToDb();
console.log(process.argv);

const FillData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const users = await User.insertMany(userData);

    const admin = users[0]._id;

    const SingleProduct = products.map((product) => {
      return { ...product, user: admin };
    });

    await Product.insertMany(SingleProduct);
    console.log("Data is successfully saved".green.inverse);
  } catch (error) {
    console.log(error);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    console.log("Data successfully deleted".red.inverse);
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "destroy") {
  destroyData();
} else {
  FillData;
}
