const TodosModel = require('./TodosModel');

// fonction AjouterTodos
exports.AjouterTodos = (req,res)=>
{
   const todosObj ={
      content : req.body.content,
      date: req.body.date
   }   
   const Todos = new TodosModel(todosObj) ;

   Todos.save(( error , createdTodos )=>{
      if (error) res.status(400).json({error}) //error d'ajout
      if(createdTodos){ 
         return res.status(200).json({createdTodos})
      }

   });

}

// fonction SupprimerTodos
exports.SupprimerTodos =( req , res )=>
{
  const id = req.params.id ;
  TodosModel.findByIdAndRemove(id).exec((error , todos)=>{
   if (error) res.status(400).json({error}) //error 
   if (todos)
      return res.status(200).json({"message" : "todos supprimee avec succés .."})

  }) ;
}

// fonction ModifierTodos
exports.ModifierTodos =(req,res)=>
{
  const id = req.params.id ;
  const ModifiedObj = {
   content : req.body.content,
   date: req.body.date
  }

  TodosModel.findByIdAndUpdate(id , ModifiedObj).exec((error , modifiedTodos)=>{
   if (error) res.status(400).json({error}) //error 
   if (modifiedTodos)
      return res.status(200).json({"message" : "todos modifiee avec succés .."})

  }) ;
}

// fonction ListerTodos
exports.ListerTodos =  (req,res)=>
{
   TodosModel.find({}).exec((error , listTodos)=>{
      if (error) res.status(400).json({error}) // error
      if(listTodos){ 
         return res.status(200).json({listTodos})
      }

   });
}

