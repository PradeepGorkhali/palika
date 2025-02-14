const express = require('express')
const Student = require("./model/Student")
const Sifaris = require("./model/Sifaris")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const cors = require('cors');
app.use(cors());

dotenv.config();
app.use(express.json())

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successful"))
.catch((err) => {
    console.log(err);
});


//Kararcontract section
app.post("/students", (req, res) =>{
    console.log(req.body)
    const user = new Student(req.body);

    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })

});

app.get('/getUsers', (req, res) =>{
    Student.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

//Sifaris API section
app.post("/sifaris", (req, res) =>{
    console.log(req.body)
    const user = new Sifaris(req.body);

    user.save().then(() =>{
        res.status(201).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })

});
app.get('/getsifaris', (req, res) =>{
    Sifaris.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



//update Sifaris
app.put("/update", async(req,res)=>{
    console.log(req.body)
    const { id,...rest} = req.body
    console.log(rest)

    const data =  await Sifaris.updateOne({_id : id},rest)
    res.send({success: true, message:"data update successfully", data:data})

})
//delete sifaris
app.delete("/delete/:id", async(req,res) =>{
    const id = req.params.id
    console.log(id)
    const data = await Sifaris.deleteOne({_id : id})
    res.send({success : true, message : "data deleted successfully", data : data})
})

app.listen(process.env.PORT || 5000, () => {
    console.log("App is running")
})