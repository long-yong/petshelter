// controller.js

const { Pet } = require('./models')

function errArr(err) {
    arr = [];
    for(var key in err.errors) arr.push (err.errors[key].message);
    if(arr.length==0) arr.push('This name is existed, input a new name!');
    return arr;
}

function all_obj(req,res,model) {
    model.find({})
    .then(data=>{ res.json({allObj:data}); });
}

function one_obj(req,res,model) {
    model.findById(req.params.id)
    .then(data=>{ res.json({oneObj:data}); });
}

function new_obj(req,res,model) {
     model.create(req.body)
    .then(data=>{ res.json({oneObj:data}); })
    .catch(err=>{ res.json({errArr:errArr(err)}); });
}

function del_obj(req,res,model) {
    model.findByIdAndDelete(req.params.id)
    .then(data=>{ model.find({}).then(data=>{
        res.json({allObj:data}); });
    });
}

function up_obj(req,res,model) {
    model.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true})
    .then(data=>{ res.json({oneObj:data}); })
    .catch(err=>{ res.json({errArr:errArr(err)}); })
}

module.exports = {

    // pet

    allPet:(req,res)=>{ all_obj(req,res,Pet); },
    onePet:(req,res)=>{ one_obj(req,res,Pet); },
    newPet:(req,res)=>{ new_obj(req,res,Pet); },
    delPet:(req,res)=>{ del_obj(req,res,Pet); },
    upPet: (req,res)=>{ up_obj (req,res,Pet); },

    allPetSorted:(req,res)=>{
        Pet.find({}).sort({'type':1})
        .then(data=>{ 
            res.json({allObj:data}); 
        })
    },

};


