const Airtable = require("airtable");
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);

export const projectsTable = base("projects");

export const skillsTable = base("skills");

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://antoniobeltran.vercel.app";

export const fetchProjectsFromAirtable = async () => {
  const projects = await (
    await fetch(server + "/api/fetchProjectsFromAirtable")
  ).json();
  return projects;
};
