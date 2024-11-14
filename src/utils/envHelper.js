import dotenv from "dotenv";
import path from "path";

const loadEnvVariables = () => {
  dotenv.config({
    path: path.resolve(process.cwd(), `.env`),
  });
  //   if (process.env.NODE_ENV == "development") {
  //     console.log("development mode!!!!");
  //   }
};

export default loadEnvVariables;
