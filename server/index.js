const express=require("express");
const mongoose=require("mongoose");
const port=8888;
const app=express();
const session=require("express-session");


const routes_auth=require("./routes/routes_auth");
const routes_orgs=require("./routes/routes_orgs");
const routes_users=require("./routes/routes_user");
const routes_admin=require("./routes/routes_admin");
// const routes_free=require("./routes/routes-free");

// const routes_client=require("./routes/routes-client");



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");



//mongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/rubix25")
.then(console.log("MongoDB connected"))
.catch((err)=>{console.log(err)});


app.use(session({
    secret: 'your_secret_key',    
    resave: false,
    saveUninitialized: true,
   

    cookie: {
      maxAge: 3600000,  
      httpOnly: true,   
      secure: false     
  }
  }));


app.use("/", routes_auth);
app.use("/orgs", routes_orgs);
app.use("/users", routes_users);
app.use("/admin", routes_admin);
// app.use("/", routes_free);

// app.use("/", routes_client);





app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});
