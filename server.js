import express from 'express';
import sum from './sum.js';


const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

app.get("/home", async(req, res) => {
  res.json({ msg: "Welcome to the Home Page!" });
});

app.get("/getSum/:a/:b", async(req, res) => {
  const { a, b } = req.params;
  res.json({
     ans: sum(parseInt(a), parseInt(b))
    });
});