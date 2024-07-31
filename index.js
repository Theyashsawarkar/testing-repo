
import express from "express";
import 'dotenv/config'

const app = express();

app.get("/", (_, res) => {
  res.send("app is working fine")
})

app.listen(process.env.PORT || 4000, () => {
  console.log("app is listining on ", process.env.PORT);
});
