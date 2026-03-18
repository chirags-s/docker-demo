import express from 'express';

const app=express();
const PORT=process.env.PORT ?? 8001;

app.get('/', (req, res)=>{
    res.send({message : 'Hello from the server\n'});
})

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})