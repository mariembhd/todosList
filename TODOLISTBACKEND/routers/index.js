const express = require('express') ; // appel à express
const app = express() ; // serveur
const mongoose = require('mongoose'); // appel bd
const TodosModel = require('./TodosModel');
app.use(express.json());

const TodosRoutes = require('./TodosRoutes') ;

// listes des taches
app.use('/todos', TodosRoutes ) 
 
// tache lister todos 
app.get('/todos/lister',)


// tache ajouter todos
app.post('/todos/ajouter', )



// tache supprimer todos
app.get('/todos/:id/supprimer', )


// tache modifier todos
app.post('/todos/:id/modifier', )



// connexion a la bd
mongoose.connect('mongodb://127.0.0.1:27017/meanstackcourse', { useNewUrlParser : true }) ;

const db = mongoose.connection ;
db.once('open',()=>{
   console.log('database connected');
})
db.on('error', err =>{
    console.log('connection error :', err);
})



// tourner le serveur
app.listen(3000,()=>{
console.log("serveur demarer");
});