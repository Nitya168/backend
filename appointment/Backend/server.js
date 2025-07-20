const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
const PORT=8000;

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://nityakansal39:Tutor*70@cluster0.yyavwtl.mongodb.net/',{
    dbName:'appointmentdb'
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'Connection error'));
db.once('open',()=> console.log('Connection done'));

var contactschema=mongoose.Schema({
    Name:String,
    email:String,
subject:String,
message:String,


});
var Contact = mongoose.model("Contact",contactschema);
app.post('/api/insertcontact',async(request,response)=>{
    console.log(request.body);
    try{
        const contact=new Contact(request.body)
        await contact.save()
        response.json({success:false, message:'form submission'})
    }
    catch(error){
        console.log(error)
        response.json({success:false, message:'error in submission'})
    }
    })

var registerschema=mongoose.Schema({
    Name:String,
    email:String,
subject:String,
message:String,


});
var Register = mongoose.model("Register",registerschema);
app.post('/api/insertregister',async(request,response)=>{
    console.log(request.body);
    try{
        const register=new Register(request.body)
        await register.save()
        response.json({success:false, message:'form submission'})
    }
    catch(error){
        console.log(error)
        response.json({success:false, message:'error in submission'})
    }
    })

var Loginschema=mongoose.Schema({
    Name:String,
    PASSWORD:String,


});
var Login = mongoose.model("Login",Loginschema);
app.post('/api/insertlogin',async(request,response)=>{
    console.log(request.body);
    try{
        const login=new Login(request.body)
        await login.save()
        response.json({success:false, message:'form submission'})
    }
    catch(error){
        console.log(error)
        response.json({success:false, message:'error in submission'})
    }
    })

    app.get('/viewenquiries', async(request,response)=>{
    const data=await Contact.find()
    response.json(data)

})
app.get('/viewregisteration', async(request,response)=>{
    const data=await Register.find()
    response.json(data)

})
app.get('/viewblogs', async(request,response)=>{
    const data=await Blog.find()
    response.json(data)

})
var blogSchema=mongoose.Schema({
    title:String,
    description:String,
    pic:String,
    poston:String,
    postby:String
    
});
var Blog = mongoose.model("Blog", blogSchema);

app.post('/api/insertblog', async(request,response)=>{
    console.log(request.body);
    try{
        const blog=new Blog(request.body)
        await blog.save()
        response.json({success:true, message:'form submission'})
    }
    catch(error){
        console.log(error)
        response.json({success:false,message:'error in submission'})
    }
})
app.post('/viewblogbyid',async(request,response)=>{
    const data=await Blog.find({_id:request.body.id})
    response.json(data)
    console.log(data)
})
app.post('/api/deleteblogbyid', async(request,response)=>{
    console.log(request.body);
    try{
        const data=await Blog.deleteOne({_id:request.body.id})
        response.json(data)
    }
    catch(error){
        console.log(error)
        response.json({success:false,message:'error in submission'})
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});