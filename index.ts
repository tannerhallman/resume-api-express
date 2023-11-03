import express, { Request, Response } from "express";

import bodyParser from "body-parser";
import * as staticExperience from './experience'

import db from './database'

// Middleware to parse JSON
app.use(bodyParser.json());

// Sample data for Experience and Skills
let experience: Object = staticExperience;
let skills: any[] = [];

// Endpoints for Experience
app.get("/experience", (req: Request, res: Response) => {
  res.json(staticExperience);
});

app.post("/experience", (req: Request, res: Response) => {
  const newExp = req.body;
  experience.push(newExp);
  res.json(newExp);
});

app.put("/experience/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedExp = req.body;
  experience[id] = updatedExp;
  res.json(updatedExp);
});

app.delete("/experience/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  experience.splice(id, 1);
  res.sendStatus(204);
});

// Endpoints for Skills
app.get("/skills", (req: Request, res: Response) => {
  res.json(skills);
});

app.post("/skills", (req: Request, res: Response) => {
  const newSkill = req.body;
  skills.push(newSkill);
  res.json(newSkill);
});

app.put("/skills/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedSkill = req.body;
  skills[id] = updatedSkill;
  res.json(updatedSkill);
});

app.delete("/skills/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  skills.splice(id, 1);
  res.sendStatus(204);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
