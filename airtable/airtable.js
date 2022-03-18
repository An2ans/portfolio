const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);

export const projectsTable = base("projects");

export const skillsTable = base("skills");

const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "";

export const fetchProjectsFromAirtable = async () => {
  const projects = await (
    await fetch(server + "/api/fetchProjectsFromAirtable")
  ).json();
  return projects;
};

export const fetchSkillsFromAirtable = async () => {
  const skills = await (
    await fetch(server + "/api/fetchSkillsFromAirtable")
  ).json();
  return skills;
};

export const fetchProjectsFromAirtableAPI = async (req, res) => {
  if ((req.method = "GET")) {
    try {
      let projects = [];
      const response = await projectsTable
        .select()
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            projects.push(record.fields);
          });
          fetchNextPage();
        });
      res.json(projects);
      res.status(200);
    } catch (e) {
      res.status(500);
      res.json({ message: "there was an error retrieving the records", e });
    }
  }
};

export const fetchProjects = async () => {
  try {
    let projects = [];
    await projectsTable.select().eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        projects.push(record.fields);
      });
      fetchNextPage();
    });
    return projects;
  } catch (e) {
    return console.log({
      message: "there was an error retrieving the records for paths",
      e,
    });
  }
};
