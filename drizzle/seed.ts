const Drizzle = require("drizzle")
import skillsData from './skills'
import experienceData from './experience'

import database from "../database"

// Create and save records
const ExperienceModel = drizzle.model("Experience");
const SkillsModel = drizzle.model("Skills");

const createExperienceRecords = async () => {
  for (const data of experienceData) {
    await database.
  }
};

const createSkillsRecord = async () => {
  await SkillsModel.create(skillsData);
};

// Call the functions to populate the database
createExperienceRecords().then(() => {
  createSkillsRecord().then(() => {
    console.log("Database populated successfully.");
  });
});
