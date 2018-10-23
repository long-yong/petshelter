// model_Quote.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true},
                 (errs)=>errs ? console.log(errs):console.log('db is good to go'));

var PetSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"This name existed, give a new name!"],
        required: true,
        minlength:[3,"Name must have 3 or more letters"],
    },
    type:{ 
        type:String,
        required: true,
        minlength:[3,"Type must have 3 or more letters"],
    },
    description:{
        type:String,
        required: true,
        minlength:[3,"Description must have 3 or more letters"],
    },
    skill1:{ 
        type:String,
    },
    skill2:{ 
        type:String,
    },
    skill3:{ 
        type:String,
    },
    likes:{
        type:Number,
        default:0,
    },
    
}, {timestamps:true});


module.exports = {
    Pet:      mongoose.model('Pet',      PetSchema),
}

