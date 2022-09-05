const express = require ("express");
const fs = require ("fs");
const bodyparser = require ("body-parser");
const app = express()
const port = process.env.PORT || 3000
const pengguna= fs.readFileSync("users.json");
const users = JSON.parse(pengguna);
const models = require("./models")
// console.log(users)


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine", "ejs")

app.use(express.static ("public"))

app.get("/",(req,res) =>{
    res.render ("login")
})
app.post("/login", (req,res) =>{
    if (req.body.username  == users.username && req.body.password == users.password){
        res.redirect("/home")
        
    }else {
        res.send ("wrong username or password")
    }
})

app.get("/dashboard", async(req,res) =>{
    const users = await models.UserGame.findAll({include:[models.UserBiodata]})
    res.render("dashboard",{users})
})
app.get("/addUsers", (req, res) =>{
    res.render("addUsers")
})
app.post("/save-user", async(req,res)=> {
    await models.UserGame.create(req.body)
    res.redirect("/dashboard")
})

app.get("/bio/:id", async(req, res)=>{
    const {id}= req.params
    const user= await models.UserGame.findOne({
        where: {id: id}
    })
    res.render("addBiodata", {user})
})
app.post("/bio/:id", async(req,res)=>{
    const {id}= req.params
    const {dob,pob,city,gender}= req.body
    await models.UserBiodata.create({
        UserGameId: id,
        dob: dob,
        pob: pob,
        city: city,
        gender: gender
     })
     res.redirect("/dashboard")
})

app.get("/edit/:id", async(req, res) => {
    const {id}= req.params
    const user= await models.UserGame.findOne({
        where: {id: id}
    })
    const biodata=  await models.UserBiodata.findOne({
        where: {UserGameId: id}
    })
    res.render("edit", {user,biodata}) 
})
app.post("/edit/:id", async (req,res) => {
    const {id}= req.params
    const user= await models.UserGame.findOne({
        where: {id: id}
    })
    const biodata=  await models.UserBiodata.findOne({
        where: {UserGameId: id}
    })
    await user.update(req.body)
    await biodata.update(req.body)
    res.redirect("/dashboard")
})
app.get("/details", async (req,res) =>{
    const {id}=req.params
    const user= await models.UserGame.findOne({
        where: {id: id}
    })
    res.render("details",{user})
})

app.get("/delete/:id", async(req, res) => {
    const {id}= req.params
    await models.UserGame.destroy({
        where: {id: id}
    })
    res.redirect("/dashboard")
})
app.get("/home",(req,res) =>{
    res.render ("home")
})
app.get("/game",(req,res) =>{
    res.render ("game")
})
app.get("/API",(req,res) =>{
    res.send ({username: users.username, password: "****"})
})
app.listen(port)