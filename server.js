const express = require('express');
const app = express();


app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get('/', (req,res) => {
 res.render('index');
});

app.get('/admin', (req,res) => {
    res.render('admin');
   });
// const DB = "mongodb+srv://sagarxoxo:socool12305@cluster0.kbxlt.mongodb.net/patient?retryWrites=true&w=majority";
// mongoose.connect(DB).then(() => {
   // console.log('Conncetion Sucefull');
// }).catch((err) => console.log("no coo"))


// const patientDetails = {
//     name: String,
// email: String,
// date:String,
// }

// const Patient = mongoose.model("patient", patientDetails);

// app.use(express.static((__dirname, 'public')));

// app.get('/', function(req, res) {
//     try{
//     res.sendFile(__dirname + "/index.html");}
//     catch(error){}
//   });


  

// app.post('/', function(req, res) {
//     let newPatient = new Patient({
//     name: req.body.name,
//     email: req.body.email,
//     date: req.body.date,
//     })
//     newPatient.save();
//     res.redirect('/');
// });





