const mongodb = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
console.log(process.env);
const port = process.env.APP_PORT || 3000;
const dbUrl = process.env.MONGO_STRING;
console.log("Start")
console.log(dbUrl);
console.log("END")
let db;
const m = new mongodb.MongoClient(dbUrl,{useNewUrlParser:true});
m.connect();
db = m.db("CloudDB");
app.use(express.json());
app.use(cors());
//curl --request POST http://localhost:8082/test -d "{\"name\":\"Test1\",\"txt\":\"txt txt txt\"}" -H "Content-Type: application/json"
app.post("/api/test", async (req, res) => {
    const { name, txt } = req.body;
    await db.collection("Cloud").insertOne({
        name: name ?? "NAME",
        text: txt ?? "TEXT"
    });
    return res.json({ message: `${txt} is writed in db!!!` });
});
//curl --request GET http://localhost:8082/test -H "Content-Type: application/json"

app.get("/api/test",async (_,res)=>{
    const items = await db.collection("Cloud").find().toArray();
    return res.json({length:items.length,items});
});
app.listen(port, () => {
    console.log(`app is running on port:${port}`);
});