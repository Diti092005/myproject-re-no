const express=require("express")
const PORT=process.env.PORT||1234
const app =express()



app.listen(PORT,()=>{
    console.log(`project bis runing in port: ${PORT}`);
})