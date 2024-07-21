const mongoose = require("mongoose")

const sifarisSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },

    dartanum:{
        type: String,
        required: true
    },
    dartafy:{
        type: String,
        required: true
    },
    ward:{
        type: String,
        required: true
    },
     
    sansthachalani:{
        type: String,
        required: true
    }
}
)

const Sifaris = new mongoose.model("Sifaris",sifarisSchema);

module.exports = Sifaris;