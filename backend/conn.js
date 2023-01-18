const mongoose = require('mongoose')
const Db = "mongodb+srv://prashant:smart@5116@cluster0.kdodc.mongodb.net/student?retryWrites=true&w=majority"
mongoose.connect(Db,{useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true}).then(()=>{
        console.log("successful")
    }).catch((e)=>{
        console.log(e)
    })
    