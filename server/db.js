const mongoose = require('mongoose')
function Connection() {
    const mongoURI = "mongodb://satyamwebsite1_db_user:satyam62066@ac-r0c4x8a-shard-00-00.vxjcxys.mongodb.net:27017,ac-r0c4x8a-shard-00-01.vxjcxys.mongodb.net:27017,ac-r0c4x8a-shard-00-02.vxjcxys.mongodb.net:27017/?ssl=true&replicaSet=atlas-ppyamb-shard-0&authSource=admin"
    mongoose.connect(mongoURI)
    .then(() => console.log("connected to database"))
    .catch(err => console.log(err))
}

module.exports = Connection