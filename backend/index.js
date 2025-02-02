import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';




const app= express();

app.use(express.json());

//CORS MIDDLEWARE
// app.use(cors(
//   {
//     origin:'http://localhost:3000',
//     methods:['GET','POST',"PUT","DELETE"],
//     allowedHeaders:['Content-Type'],
//   }
// ))

app.use(cors());
app.get('/',(req,res)=>{
  console.log(req)
  return res.status(234).send("Hellow")
});

app.use('/books',booksRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
console.log("Success");
app.listen(PORT,()=>{
  console.log(`APP is Listening to port:${PORT}`)
})

})

.catch((error)=>{
console.log(error);
})
;