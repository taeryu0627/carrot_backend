import express from "express";
import Article from "../model/article.model";

type NewArticle = {
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  isAdjustable: boolean;
};

const router = express.Router();

router.get("/articles", async (req, res) => {
  const articles: Article[] = await Article.findAll();
  return res.status(200).json(articles);
});

router.post("/articles", async (req, res) => {
  const newArticle: NewArticle = req.body as NewArticle;
  if (!newArticle) {
    return res.status(400).json();
  }
  const article = await Article.create({
    title: newArticle.title,
    description: newArticle.description,
    image: newArticle.image,
    location: newArticle.location,
    price: newArticle.price,
    isAdjustable: newArticle.isAdjustable,
  });

  return res.status(201).json({
    id: article.id,
  });
});

export default router;
