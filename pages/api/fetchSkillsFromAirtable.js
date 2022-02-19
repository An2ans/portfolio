import { skillsTable } from "../../airtable/airtable";

const fetchSkillsFromAirtable = async (req, res) => {
  if ((req.method = "GET")) {
    try {
      let skills = [];
      const response = await skillsTable
        .select()
        .eachPage((records, fetchNextPage) => {
          records.forEach((record) => {
            skills.push(record.fields);
          });
          fetchNextPage();
        });
      res.json(skills);
      res.status(200);
    } catch (e) {
      res.status(500);
      res.json({ message: "there was an error retrieving the records", e });
    }
  }
};

export default fetchSkillsFromAirtable;
