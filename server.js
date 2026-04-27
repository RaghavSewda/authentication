import app from "./src/app.js"
import config from "./src/config/config.js"
import connectDB from "./src/config/database.js";

connectDB()
    .then(() => {
        app.listen(config.PORT,() => {
            console.log(`Server is listening on port ${config.PORT}..`);
        })
    })
    .catch ((err) => {
        console.log("Database connection failed!!!")
    })
