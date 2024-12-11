const mongoose = require("mongoose")
require("dotenv").config()

const MONGODB_URL = "mongodb://localhost:27017/Anshu"

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB Connection Success`))
    .catch((err) => {
      console.log(`DB Connection Failed`)
      console.log(err)
      process.exit(1)
    })
}
