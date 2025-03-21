import express from "express";
// import sqlite3 from "sqlite3";

// Utilisation typeorm
import dataSource from "./config/db";
import "reflect-metadata";
import { Ad } from "./entities/Ad";
import { Tag } from "./entities/Tag";
import { Category } from "./entities/Category";

// const db = new sqlite3.Database("good_corner.sqlite");

const app = express();
app.use(express.json());
const port = 3000;

app.post("/ads", async (req, res) => {
	const ad = new Ad();
	ad.title = req.body.title;
	ad.description = req.body.description;
	ad.owner = req.body.owner;
	ad.price = req.body.price;
	ad.date = req.body.date;
	ad.img = req.body.img;
	ad.city = req.body.city;
	await ad.save();
	res.status(201).send("ad has been created");
});

app.post("/tags", async (req, res) => {
	const tag = new Tag();
	tag.title = req.body.title;
	tag.description = req.body.description;
	await tag.save();
	res.status(201).send("tag has been created");
});

app.post("/categories", async (req, res) => {
	const category = new Category();
	category.title = req.body.title;
	await category.save();
	res.status(201).send("category has been created");
});

app.get("/ads", async (_req, res) => {
	const allAds = await Ad.find();
	res.send(allAds);
});

app.delete("/ads/:id", (req, res) => {
	// const id = Number.parseInt(req.params.id);
	Ad.delete(req.params.id);
	res.send("Ad deleted !");
});

// app.put("/ads/:id", async (req, res) => {
// 	const id = Number.parseInt(req.params.id);
// 	const modifiedAd = await Ad.findOneByOrFail({ id });
// 	if (modifiedAd !== null) {
// 		modifiedAd.title = req.body.title;
// 		modifiedAd.description = req.body.description;
// 		modifiedAd.owner = req.body.owner;
// 		modifiedAd.price = req.body.price;
// 		modifiedAd.date = req.body.date;
// 		modifiedAd.img = req.body.img;
// 		modifiedAd.city = req.body.city;
// 		modifiedAd.save();
// 	}
// 	res.send(modifiedAd);
// });

app.put("/ads/:id", async (req, res) => {
	await Ad.update({ id: Number.parseInt(req.params.id) }, req.body);
	res.send("Ad updated !");
});

app.listen(port, async () => {
	console.log(`Example app listening on port ${port}`);
	await dataSource.initialize();
	const categories = await Category.find();
	if (categories.length === 0) {
		const misc = new Category();
		misc.title = "misc";
		await misc.save();
	}
});
