let todoo = [{"item":"i love using node .js"}, {"item": "I love javascript and  Typescript also"}]
const bodyParser = require('body-parser')
const urlEncodedBodyPerser = bodyParser.urlencoded({ extended: false })
const mongoose  = require("mongoose")



mongoose.connect("mongodb+srv://dbAdmin:dismatest@cluster0.gvgco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err, succ) => {
    if (err) {
        console.log("could not connect to db", err)
    } else {
        console.log("db connected successfully")
 
    }
})

//creating a new schema is like creating a blueprint of the schema
let todoSchema = new mongoose.Schema({
    item:String
})

let Todoo = mongoose.model('Todoo', todoSchema)
// let item = Todoo({ item: "love javascrip and fevouright" }).save((err, data) => {
//     if (err) throw err
//     console.log("success", data)
// })

module.exports = (app) => {

    app.get('/', (req, res) => {
        //get gata from the view and pass it to the view
        Todoo.find({}, (err, data) => {
            if (err) throw err
            res.render("home.ejs", {todoo:data})
        }) 
    })

    app.post('/add', urlEncodedBodyPerser, (req, res) => {
        //get data from the view and save it to the collection Todoo
        let newTodoo = Todoo(req.body)
        newTodoo.save(err, data=> {
            if (err)
                console.log("could not save data to the database")
            res.json(data)
        })
    })

    app.delete('/delete/:item', (req, res) => {
        Todoo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(err, data => {
            if (err) console.log("rscould not delete the todoo item")
            res.json(data)
        })
        // todoo = todoo.filter(data => {
        //     //replacing the white spaces whith the -
        //     //you can also use \s metacharacter which matches any white spaces
        //     return data.item.replace(/ /g, '-') !== req.params.item
        // })
        // res.json(todoo)
        
    })
    
}

