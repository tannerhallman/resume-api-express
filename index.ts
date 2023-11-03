import express, { Request, Response } from "express";

import bodyParser from "body-parser";
import * as staticExperience from './drizzle/experience'

import db from './database'

const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to My Resume API. Please see the docs at /docs" });
});
// Endpoints for Experience
app.get("/experience", (req: Request, res: Response) => {
  res.json(staticExperience);
});

app.post("/experience", (req: Request, res: Response) => {
  const newExp = req.body;
  // experience.push(newExp);
  res.json(newExp);
});

app.put("/experience/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedExp = req.body;
  // experience[id] = updatedExp;
  res.json(updatedExp);
});

app.delete("/experience/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  // experience.splice(id, 1);
  res.sendStatus(204);
});

// Endpoints for Skills
app.get("/skills", (req: Request, res: Response) => {
  res.json("Nothing yet");
  // res.json(db.query.allSkills());
});

app.post("/skills", (req: Request, res: Response) => {
  const newSkill = req.body;
  // skills.push(newSkill);
  res.json(newSkill);
});

app.put("/skills/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedSkill = req.body;
  // skills[id] = updatedSkill;
  res.json(updatedSkill);
});

app.delete("/skills/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  // skills.splice(id, 1);
  res.sendStatus(204);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
