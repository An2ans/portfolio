const Airtable = require("airtable");

const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://antoniobeltran.vercel.app";

Airtable.configure({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
});

const base = new Airtable.base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);

export const projectsTable = base("projects");

export const skillsTable = base("skills");

export const fetchRecords = async (table) => {
  try {
    let response = [];
    await base(table)
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          response.push(record.fields);
        });
        fetchNextPage();
      });
    return response;
  } catch (e) {
    return console.log({
      message: "there was an error retrieving the records for paths",
      e,
    });
  }
};
