

const express=require('express');
const app=express();
const dotEnv=require('dotenv');
const mongoose=require('mongoose');
const vendorRoutes=require('./routes/vendorRoutes');
const bodyParser=require('body-parser');
const cors = require('cors');
const firmRoutes=require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const path=require('path');



const PORT=process.env.PORT || 4000;

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected successfully")})
.catch((error)=>{console.log(error)})


const corsOptions = {
    origin: 'https://quick-eats-vendor-dashboard2-react-js.vercel.app/', // Your frontend URL
    optionsSuccessStatus: 200 // For legacy browser support
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));



app.listen(PORT,()=>{
    console.log(`server started and running ate ${PORT}`);
})

app.use('/',(req,res)=>{
    res.send("<h1>welcome to")

})