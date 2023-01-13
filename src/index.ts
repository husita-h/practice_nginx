import express from "express";

const app = express();
const port = 5000;
const uniqueId = Math.random();

app.get("/", (req, res) => {
	res.send(`${uniqueId}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
