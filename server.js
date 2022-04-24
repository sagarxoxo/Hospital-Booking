const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const Patient = require('./models/patient.js');



const DB = "mongodb+srv://sagarxoxo:socool12305@cluster0.kbxlt.mongodb.net/patient?retryWrites=true&w=majority";
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));
              
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded ({ extended: true }));





app.get('/', (req,res) => {
 res.render('index');
});

app.get('/adminLogin', (req,res) => {
    res.render('adminLogin');
   });
//post data from database

app.get('/admin', (req,res) => {
   Patient.find()
   .then((result) => {
       res.render('admin', { patients: result})
   })
   });

//get data from html

app.post('/', (req,res) =>{
    const patient = new Patient(req.body);
    patient.save();

    res.redirect('/');
})


// const deleteDocument = async (_id) => {
//     try{
//      const result = await Patient.deleteOne( {_id} );
//         console.log(result);
//     }
//     catch(err){
//     console.log(err);

//     }
// }

// deleteDocument("626524a598b240821c667f72");



app.get('/admin/:id', (req,res) => {
    const id = req.params.id;
    Patient.findById(id)
    .then(() => {})
})

app.delete('/admin/:id' , (req,res) =>{
    const id = req.params.id;
    Patient.findByIdAndDelete(id)
    .then(result => {
        res.json({
            redirect: "/admin"
        })
    })
})
  
// Print new id to the console
    
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





